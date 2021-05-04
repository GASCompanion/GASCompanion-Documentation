const { kebabCase } = require(`lodash`)

const slugify = (source) => {
    const slug = kebabCase(source)

   return `/${slug}`.replace(/\/\/+/g, `/`)
}

module.exports = slugify