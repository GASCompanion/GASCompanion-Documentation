const fs = require(`fs`);
const path = require('path');
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const eleventyNavigationPlugin = require(`@11ty/eleventy-navigation`);
const embedYouTube = require("eleventy-plugin-youtube-embed");
const mdxPlugin = require("@jamshop/eleventy-plugin-mdx");

const output = `public`;
const input = `src`;
const NOT_FOUND_PATH = `${output}/404.html`;
const pathPrefix = ``;

const api = require(path.resolve(input, `api/api.json`));

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(mdxPlugin);
    eleventyConfig.addPlugin(embedYouTube);

    // // Copy the `img` and `css` folders to the output
    eleventyConfig.addPassthroughCopy(`${input}/**/*.css`);


    // // Copy any .jpg file to `src`, via Glob pattern
    // // Keeps the same directory structure.
    eleventyConfig.addPassthroughCopy(`${input}/**/*.png`);
    eleventyConfig.addPassthroughCopy(`${input}/**/*.gif`);

      // Nunjucks Filter
    eleventyConfig.addNunjucksFilter("api", (value) => {
        if (!value) {
            return `**Invalid**`
        }

        const [ className, method ] = value.split(/#/);

        const classData = api.Classes.find(item => item.Name === className);
        if (!classData) {
            return `**Invalid**`
        }

        let link = classData.IncludePath.replace(/\.h$/, '');

        if (method) {

            const arrays = classData.Properties.concat(classData.Events).concat(classData.Functions);
            const foundAnchor = arrays.find(item => item.Name.toLowerCase() == method.toLowerCase() )

            if (foundAnchor) {
                link += `#${foundAnchor.Name.toLowerCase()}`
                value = foundAnchor.Name;
            }
        }

        link = path.join(pathPrefix, 'api', link).replace(/\\/g, '/')

        return `[\`${value}\`](/${link})`;
    });

    const options = {
        html: true,
        breaks: true,
        linkify: true
    };

    eleventyConfig.setLibrary('md', markdownIt(options).use(markdownItAnchor))

    // Override Browsersync defaults (used only with --serve)
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: function (err, bs) {

                bs.addMiddleware(`*`, (req, res) => {
                    if (!fs.existsSync(NOT_FOUND_PATH)) {
                        throw new Error(`Expected a "${NOT_FOUND_PATH}" file but could not find one. Did you create a 404.html template?`);
                    }

                    const content_404 = fs.readFileSync(NOT_FOUND_PATH);
                    // Add 404 http status code in request header.
                    res.writeHead(404, { "Content-Type": `text/html; charset=UTF-8` });
                    // Provides the 404 content without redirect.
                    res.write(content_404);
                    res.end();
                });
            }
        }
    });

    return {
        dir: {
            input,
            output,
            includes: `_includes`
        },

        // -----------------------------------------------------------------
        // If your site deploys to a subdirectory, change `pathPrefix`.
        // Don’t worry about leading and trailing slashes, we normalize these.

        // If you don’t have a subdirectory, use `` or `/` (they do the same thing)
        // This is only used for link URLs (it does not affect your file structure)
        // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

        // You can also pass this in on the command line using `--pathprefix`

        // Optional (default is shown)
        pathPrefix: `/${pathPrefix}`,

        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    };
};
