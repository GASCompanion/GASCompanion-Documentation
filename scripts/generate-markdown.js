
import { writeFile } from 'fs/promises'
import fs from 'fs'
import arg from 'arg'
import path from 'path'
import mkdirp from 'mkdirp'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkToc from 'remark-toc'
import { createRequire } from "module";
import rimraf from 'rimraf'
import remarkEmbedImages from 'remark-embed-images'
import mimes from 'mime/lite.js'

const LAYOUT_API = `layouts/api`
const LAYOUT_INDEX = `layouts/api_index`

const GenerateFunctionsMarkdown = (HeadingText, Functions, { basedir, filepath }) => {

    return `
## ${HeadingText}

${Functions.map(({ Name, DisplayName, Image, Description, Parameters = [], ReturnValue }) => {
        const source = path.join(basedir, Image);

        let dataURI = ``;
        const bHasImage = fs.existsSync(source);
        if (bHasImage) {
            const data = fs.readFileSync(source, 'base64');
            const mime = mimes.getType(path.extname(source))
            dataURI = mime ? `data:${mime};base64,${data}` : ``;
        }


        return `### ${Name}
${DisplayName !== Description ? `
${Description}
` : ``}
${bHasImage ? `![${DisplayName}](${dataURI})` : ``}
${Parameters.length > 0 ? `

**Parameters**

| Name | Type | Description |
| --- | ---- | --- |
${Parameters.map(({ Name, Description, DisplayType }) => {
            return `| ${Name} | ${DisplayType} | ${Description} |`;
        }).join('\n')}
` : ``}    
${ReturnValue ? `
**Returns** \`${ReturnValue.DisplayType}\` ${ReturnValue.Description}
` : ``}
    
`;
    }).join('\n')}
`;
};

const GenerateClassMarkdown = ({ Name, IncludePath, Description, Properties = [], Events = [], Functions = [] }, { basedir, filepath }) => {
    return `# ${Name}

${Description}

${Properties.length > 0 ? `
## Properties

${Properties.map(({ Name, DisplayType, Description }) => {
        return `### ${Name}

**Type** \`${DisplayType}\`

${Description}
    
`;
    }).join('\n')}
` : ``}
${Events.length > 0 ? GenerateFunctionsMarkdown(`Events`, Events, { basedir, filepath }) : ``}
${Functions.length > 0 ? GenerateFunctionsMarkdown(`Functions`, Functions, { basedir, filepath }) : ``}
`;
};


const handleClass = async ({ Name, IncludePath, Description, Properties = [], Events = [], Functions = [] }, raw, basedir, outputPath) => {
    const filename = IncludePath.replace(/\.h$/, '.md');
    const filepath = path.join(outputPath, filename)

    const markdown = GenerateClassMarkdown({ Name, IncludePath, Description, Properties, Events, Functions }, { basedir, filepath });

    // const file = markdown
    const file = await remark()
        .use(remarkToc)
        .use(remarkEmbedImages)
        .process(markdown)

    const eleventyNavigation = {
        key: Name,
        parent: path.dirname(IncludePath),
        // title: IncludePath
    };

    const frontMatter = matter.stringify('', {
        Name,
        layout: LAYOUT_API,
        eleventyNavigation,
        IncludePath,
        Description
    });

    console.log('Write markdown file:', filepath);

    await mkdirp(path.dirname(filepath));
    await writeFile(filepath, `${frontMatter}
${String(file)}    
`);
}

const handleReadme = async (dir, key, eleventyNavigation, layout, outputPath) => {

    const dirname = path.join(outputPath, dir)
    const filepath = path.join(dirname, 'index.md')

    await mkdirp(dirname)
    console.log(`Create directory ${dirname}`)

    const heading = dir ? `# ${key}` : `# ${key}`
    const breadcrumb = dir ? `
{{ collections.all | eleventyNavigation("${key}") | eleventyNavigationToMarkdown | safe }}` : ``

    const frontMatter = matter.stringify(`${heading}

{{ collections.all | eleventyNavigation("${key}") | eleventyNavigationToMarkdown | safe }}`
        , {
            eleventyNavigation,
            layout
        });

    console.log('Write markdown file:', filepath);
    await writeFile(filepath, `${frontMatter}`);
}


const main = async () => {
    const args = arg({
        // Types
        '--help': Boolean,
        '--version': Boolean,
        '--output': (value, argName, previousValue) => {
            return path.resolve(value);
        },

        // Aliases
        '-v': '--version',
        '--out': '--output',
        '-o': '--output',
    });

    const jsonPath = args._[0];
    if (!jsonPath) {
        console.error(`Invalid input. Missing json path.`)
        return process.exit(1);
    }

    const require = createRequire(import.meta.url);
    const basedir = path.dirname(path.resolve(jsonPath));
    const json = require(path.resolve(jsonPath));

    const outputPath = args['--output']
    rimraf.sync(outputPath);
    await mkdirp(outputPath)

    const filepath = path.join(outputPath, 'api.json')
    await writeFile(filepath, JSON.stringify(json, null, 2));

    for (const jsonClass of json.Classes) {
        await handleClass(jsonClass, jsonClass, basedir, outputPath)
    }

    const unique = (value, index, self) => {
        return self.indexOf(value) === index;
    }

    const dirs = json.Classes.map((data) => {
        return path.dirname(data.IncludePath);
    }).filter(unique);

    for (const dir of dirs) {
        const eleventyNavigation = {
            key: dir,
            parent: 'API'
        };

        await handleReadme(dir, dir, eleventyNavigation, LAYOUT_API, outputPath)
    }

    const eleventyNavigation = {
        parent: 'Home',
        key: 'API',
        order: 99
    };

    await handleReadme('', 'API', eleventyNavigation, LAYOUT_INDEX, outputPath)
    console.log(dirs)


}

main();
