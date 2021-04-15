const parseXml = require(`xml-parser`)
const _ = require(`lodash`)
const p = require(`path`)
const debug = require("debug")("vgsc:gatsby-node")

const apiTemplate = require.resolve(`./src/templates/api-template`)
const apiPrefix = `/api/`

const slugify = (source) => {
     const slug = _.kebabCase(source)

    return `/${slug}`.replace(/\/\/+/g, `/`)
}

const isXmlNode = ({ node }) => {
    // We only care about XML content.
    return [`application/xml`, `text/xml`].includes(node.internal.mediaType)
}

async function onCreateNode({node, actions, getNode, loadNodeContent, createNodeId, createContentDigest}) {
    if (!isXmlNode({ node })) {
        return;
    }

    const { createNode, createParentChildLink } = actions

    const rawXml = await loadNodeContent(node)
    const parsedXml = parseXml(rawXml)

    const nodeArray = parsedXml.root.children.map((obj, i) => {
        if (obj.children) {
            obj.xmlChildren = obj.children
            delete obj.children
        }

        return {
            ...obj,
            id: obj.attributes.id
              ? obj.attributes.id
              : createNodeId(`${node.id} [${i}] >>> XML`),
            parent: node.id,
            children: [],
            internal: {
              contentDigest: createContentDigest(obj),
              type: _.upperFirst(_.camelCase(`${node.name} xml`)),
            },
        }
    })

    const { id, relativePath, name, parent, base, relativeDirectory } = node
    const basename = p.basename(relativeDirectory)
    const dirname = p.dirname(relativeDirectory)
    const type = _.upperFirst(_.camelCase(`${node.name} xml`))

    const fieldData = {
        type,
        // relativePath,
        relativeDirectory,
        // base,
        name,
        basename,
        dirname,
        xml: nodeArray,
        classParent: basename === `nodes` ? dirname : undefined
    }

    const apiDocsId = createNodeId(`${node.id} >>> XML`)

    debug(`Create node apiDocsId`, {
        apiDocsId,
        ...fieldData
    })

    const apiDocsNode = {
        ...fieldData,
        id: apiDocsId,
        parent: node.id,
        children: [],
        internal: {
            contentDigest: createContentDigest(fieldData),
            content: JSON.stringify(fieldData),
            type: `APIDocsNode`
        },
    }

    createNode(apiDocsNode)
    createParentChildLink({ parent: node, child: getNode(apiDocsId) })
    
    
}

exports.createPages = async ({ graphql, actions: { createPage }, reporter}) => {
    reporter.success(`onCreateAPIDocs`);

    const result = await graphql(`
        query {
            files: allFile(filter: {extension: {eq: "xml"}, relativeDirectory: {glob: "*"}}) {
                edges {
                    node {
                        name
                        extension
                        relativePath
                        relativeDirectory
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`There was an error loading your projects or pages`, result.errors)
        return
    }
    
    const files = result.data.files.edges

    files.forEach(({ node }) => {
        const slug = slugify(node.name)
        const directory = `${node.name}/nodes`
        const path = `/${apiPrefix}/${slug}`.replace(/\/\/+/g, `/`)

        debug(`Create page for`, {
            ...node,
            path,
            slug,
            directory
        })

        createPage({
            path,
            component: apiTemplate,
            context: {
                slug,
                directory,
                classParent: node.name
            },
        })
    })

}

exports.onCreateNode = onCreateNode