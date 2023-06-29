import arg from 'arg';
import { promises as fs } from 'fs';
import { createWriteStream } from 'fs';
import path from 'path';
import got from 'gh-got';
import goat from 'got';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { visit } from 'unist-util-visit'
import remarkGfm from 'remark-gfm';
import remarkGithub from 'remark-github';
import { format } from 'date-fns';
import mkdirp from 'mkdirp';
import rimraf from 'rimraf';

const token = process.env.GITHUB_TOKEN;
const user = `GASCompanion`;
const repo = `GASCompanion-Plugin`;
const assetsPattern = `https://github.com/${user}/${repo}/assets/`;

if (!token) {
  console.error(`No token could be found in process.env`);
  process.exit(1);
}

const args = arg({
  // Types
  '--help': Boolean,
  '--version': Boolean,
  '--tag': String,
  '--output': (value, argName, previousValue) => {
    return path.resolve(value);
  },

  // Aliases
  '-v': '--version',
  '--out': '--output',
  '-o': '--output',
  '-t': '--tag',
});

console.log('arg', args);

const tag = args['--tag'];
const output = args['--output'] || path.resolve('src/changelog/index.md');

console.log(`Using tag "${tag}" to fetch release note`);
console.log(`Using token "${token}" to fetch release note`);
console.log(`Using output "${output}" to generate release note`);
console.log(`---`);

// https://api.github.com/repos/GASCompanion/GASCompanion-Plugin/releases

// /repos/GASCompanion/GASCompanion-Plugin/releases/tags/6.0.0-preview

// List of heading text we know and always want to have at a fixed 5 lvl heading
const fixedHeadings = [
  `Breaking Changes 🛠`,
  `New Features 🎉`,
  `Bug Fixes`,
  `Other Changes`
];

// List of Pull Request found in the release notes, to fetch and generate just after markdown parsing
// List is filled during markdown parsing

const remarkRemoveMentions = () => {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      // Text
      if (node.type === 'text') {
        // Remove any " by @mklabs" tokens
        node.value = node.value.replace(/ by @mklabs/g, '');
        return;
      }
    });
  };
};

const remarkTransformPullRequest = () => {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      // Links
      // Gather the list of Pull Requests links, and replace with local URLs to generated .md
      if (node.type === 'link') {
        const reg = new RegExp(`https://github.com/${user}/${repo}/(pull|issues)/(\\d+)`);
        const match = node.url.match(reg);

        if (match) {
          // node.url = `../../pull/${match[2]}`;
          node.url = `/changelog/pull/${match[2]}`;
          if (node.children && node.children[0]) {
            node.children[0].value = `#${match[2]}`;
          }

          return;
        }
      }
    });
  };
};

const remarkRewritePullRequestImageAssetsUrl = (imagesToDownload) => {
  return () => {
    return (tree) => {
      visit(tree, (node, index, parent) => {
        if (node.type === 'image') {
          const { url } = node;

          if (url.startsWith(assetsPattern)) {
            imagesToDownload.push(url);
            node.url = `./${url.replace(assetsPattern, '').replace('/', '-')}.png`;
          }

          return;
        }
      });
    };
  };
};


const remarkTransformReleaseNote = (pullRequestLinks) => {
  return () => {
    return (tree) => {
      visit(tree, (node, index, parent) => {
        // Headings
        if (node.type === 'heading') {
          const { children } = node;

          // Remove first "What's Changed" heading
          if (children && children.find(child => child.value === `What's Changed`)) {
            parent.children.splice(index, 1);
            return index;
          }

          // Increase any known heading to a fixed 5 level heading depth
          const isFixedHeading = !!children.find(child => fixedHeadings.includes(child.value));
          if (isFixedHeading) {
            node.depth = 5;
            return;
          }

          return;
        }

        // Links
        // Gather the list of Pull Requests links, and replace with local URLs to generated .md
        if (node.type === 'link') {
          const reg = new RegExp(`https://github.com/${user}/${repo}/(pull|issues)/(\\d+)`);
          const match = node.url.match(reg);

          if (match) {
            // console.log(node, match)
            pullRequestLinks.push({
              url: match[0],
              api: `repos/${user}/${repo}/pulls/${match[2]}`
            });

            node.url = `./pull/${match[2]}`;
            if (node.children && node.children[0]) {
              node.children[0].value = `#${match[2]}`;
            }

            return;
          }
        }
      });
    };
  };
};

const fetchPullRequest = async ({ url, api }) => {
  console.log(`Fetch content of ${url} (API: ${api})`);
  return await got(api);
};

const fetchImage = (image, dirname) => {
  return new Promise((resolve, reject) => {
    const filename = image
      .replace(assetsPattern, '')
      .replace('/', '-');

    const downloadStream = goat.stream(image, {
      headers: {
        'authorization': `token ${token}`
        // 'Authorization': `Bearer ${token}`
      }
    })
      .on('error', reject);

    const destination = path.join(dirname, filename + '.png');
    const fileWriterStream = createWriteStream(destination)
      .on('error', reject)
      .on('finish', resolve);

    console.log(`Download image ${image} to ${destination}`);
    downloadStream.pipe(fileWriterStream);
  });
};

const getReleaseNoteContent = async () => {
  const { body } = await got(`repos/${user}/${repo}/releases/tags/${tag}`);
  console.log(body.body);
  console.log(`---`);

  let pullRequestLinks = [];

  // Parse and transform markdown of release note

  const content = await unified()
    .use(remarkParse)
    .use(remarkRemoveMentions)
    .use(remarkGfm)
    .use(remarkGithub, {
      repository: `${user}/${repo}`
    })
    .use(remarkTransformReleaseNote(pullRequestLinks))
    .use(remarkStringify)

    // .use(remarkRehype)
    // .use(rehypeSanitize)
    // .use(rehypeStringify)
    .process(body.body)

  return {
    content: String(content),
    pullRequestLinks
  };
};

const getPullRequestContent = async (tag, result) => {
  const { number, created_at, html_url, body } = result.body;
  let { title } = result.body;

  // escape title for " characters before wrapping it in "" in frontmatter
  title = title.replace(/"/g, '\\"');

  let imagesToDownload = [];

  // transform markdown content
  const content = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkGithub, {
      repository: `${user}/${repo}`
    })
    .use(remarkTransformPullRequest)
    .use(remarkRewritePullRequestImageAssetsUrl(imagesToDownload))
    .use(remarkStringify)
    .process(body || '');

  console.log('imagesToDownload', imagesToDownload);

  const promises = imagesToDownload.map(image => fetchImage(image, path.join(path.dirname(output), `pull/${number}`)));
  Promise.all(promises).catch(console.error);

  //   return `---
  // title: "Pull Request #${number}"
  // description: "${title}"
  // layout: layouts/markdown
  // ---

  // *[on ${format(new Date(created_at), 'PPP')}](${html_url})*

  // ## ${title}

  // ${content}
  // `;

  return `---
title: "Pull Request #${number}"
description: "${title}"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_${number}
  title: "${tag} - PR #${number}"
  excerpt: "${title}"
layout: layouts/markdown
---

*[on ${format(new Date(created_at), 'PPP')}](${html_url})*

## ${title}

${content}
`;
};

{
  const { body } = await got(`repos/${user}/${repo}/releases/tags/${tag}`);
  console.log(body.body);
  console.log(`---`);

  // Delete all PR pages
  // rimraf.sync(path.join(path.dirname(output), 'pull'));

  // Parse and transform markdown of release note

  const { content, pullRequestLinks } = await getReleaseNoteContent();

  // Fetch and build each Pull Request page

  const promises = pullRequestLinks.map(link => fetchPullRequest(link));
  const results = await Promise.all(promises);

  for (const result of results) {
    const { number } = result.body;
    const dirname = path.join(path.dirname(output), `pull/${number}`);
    await mkdirp(dirname);
    console.log(`Created directory ${dirname}`);

    const content = await getPullRequestContent(tag, result);

    const filename = path.join(dirname, 'index.md');
    await fs.writeFile(filename, content);

    console.log(`Created file at ${filename}`);
  }

  // Update changelog with new content

  let file = await fs.readFile(output, 'utf8');

  const startToken = `<!-- changelog-pr begin -->`;
  const endToken = `<!-- changelog-pr end -->`;

  const reg = new RegExp(`${startToken}\[\\s\\S\]*${endToken}`, 'm');
  file = file.replace(reg, `${startToken}
## ${body.name} (${format(new Date(body.created_at), 'yyyy-MM-dd')})

${content}
${endToken}`);

  // console.log(file);
  await fs.writeFile(output, file);
}
