// import React from 'react';
// export default ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

import React from 'react';
import { css } from '@emotion/react';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';
import PostNav from '@rocketseat/gatsby-theme-docs/src/components/Docs/PostNav';
import EditGithub from '@rocketseat/gatsby-theme-docs/src/components/Docs/EditGithub';
import slugify from '@rocketseat/gatsby-theme-docs/src/util/slug';
import Image from "./image"
import { node } from 'prop-types';
import TableParams from './table-params';


const Docs = ({ data, pageContext }) => {
    const title = `${pageContext.classParent}`
    const description = `Generated API documentation for ${pageContext.classParent}`
    const slug = pageContext.slug
    const image = ""
    // context
    const repositoryEditUrl = "foo"
    const repositoryProvider = "foo"
    const prev = "foo"
    const next = "foo"

    const body = `
        ## YOO!
    `

    const members = data.members.edges
    const images = data.images.edges

    const headings = members.map(({ node }) => ({
        depth: 2,
        value: node.name
    }))

    const findXML = (node, name) => {
        return node.xml.find(item => item.name === name)
    }

    const findImage = (node) => {
        const imgNode = node.xml.find(item => item.name === "imgpath");
        const relativePath = imgNode.content.replace(/^\.\./, node.dirname)
        const img = images.find(({ node }) => node.parent.relativePath === relativePath)
        return img.node.fixed;
    }

    return (
        <>
            <SEO title={title} description={description} slug={slug} image={image} />
            <Layout
                disableTableOfContents={false}
                title={title}
                headings={headings}
            >

                {members.map(({ node }) => (
                    <div key={node.name}>
                        <div css={css`padding-bottom: 24px;`}>
                            <h2 id={slugify(node.name)}>{node.name}</h2>
                            <p>
                                {findXML(node, `description`).content}
                            </p>

                            <Image fixed={findImage(node)} />

                            <TableParams node={node} type="Inputs" />

                            <TableParams node={node} type="Outputs" />
                        </div>

                        <hr />
                    </div>
                ))}

                {/* <EditGithub
                    repositoryEditUrl={repositoryEditUrl}
                    repositoryProvider={repositoryProvider}
                />
                <PostNav prev={prev} next={next} /> */}
            </Layout>
        </>
    );
}

export default Docs