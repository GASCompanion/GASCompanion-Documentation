const parseXml = require(`xml-parser`)
const p = require(`path`)
const _ = require(`lodash`)
const debug = require("debug")("gsc:gatsby-node")
const slugify = require(`./src/utils/slugify`)

const apiIndexTemplate = require.resolve(`./src/templates/api-index-template`)
const apiTemplate = require.resolve(`./src/templates/api-template`)
const apiPrefixV2 = `/v2/api`
const apiPrefixV3 = `/v3/api`

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
            type: obj.type,
            internal: {
              contentDigest: createContentDigest(obj),
              type: _.upperFirst(_.camelCase(`${node.name} xml`)),
            },
        }
    })

    const { id, relativePath, name, parent, base, relativeDirectory, absolutePath } = node
    const basename = p.basename(relativeDirectory)
    const dirname = p.dirname(relativeDirectory)
    const type = _.upperFirst(_.camelCase(`${node.name} xml`))

    const basedir = p.basename(absolutePath.replace(relativePath, ``))

    const fieldData = {
        type,
        // relativePath,
        relativeDirectory,
        // base,
        basedir,
        name,
        basename,
        dirname,
        xml: nodeArray,
        classParent: basename === `nodes` ? dirname : undefined
        // classParent: basename === `nodes` ? dirname : undefined
    }

    const apiDocsId = createNodeId(`${node.id} >>> XML`)
    // debug(`Create node apiDocsId`, {
    //     apiDocsId,
    //     ...fieldData
    // })

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
                        absolutePath
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`There was an error loading your projects or pages`, result.errors)
        return
    }

    createPage({
        path: `/${apiPrefixV2}/`.replace(/\/\/+/g, `/`),
        component: apiIndexTemplate,
        context: {
            prefix: apiPrefixV2,
            slug: apiPrefixV2
        }
    })

    createPage({
        path: `/${apiPrefixV3}/`.replace(/\/\/+/g, `/`),
        component: apiIndexTemplate,
        context: {
            prefix: apiPrefixV3,
            slug: apiPrefixV3
        }
    })

    const v2Files = result.data.files.edges.filter(({ node }) => {
        return /\/GASCompanionAPI\//.test(node.absolutePath)
    });

    const v3Files = result.data.files.edges.filter(({ node }) => {
        return /\/GASCompanionAPI_v3\//.test(node.absolutePath)
    });

    CreateAPIPages(v2Files, apiPrefixV2, `GASCompanionAPI`, createPage)
    CreateAPIPages(v3Files, apiPrefixV3, `GASCompanionAPI_v3`, createPage)
}

exports.onCreateNode = onCreateNode

function CreateAPIPages(files, prefix, basedir, createPage) {
    files.forEach(({ node }) => {
        const slug = `${prefix}${slugify(node.name)}`
        const directory = `${node.name}/nodes`

        let path = `${slug}`.replace(/\/\/+/g, `/`)
        if (path[path.length - 1] === `/`) {
            path = path.slice(0, -1)
        }

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
                classParent: node.name,
                basedir
            }
        })
    })
}
