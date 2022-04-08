import React from 'react';
import { css } from '@emotion/react';

import Layout from '@mklabs/gatsby-theme-docs/src/components/Layout';
import Seo from '@mklabs/gatsby-theme-docs/src/components/SEO';
// import slugify from '@mklabs/gatsby-theme-docs/src/util/slug';
import slugify from "../utils/slugify";
import { Link } from "gatsby";

const Docs = ({ data, pageContext }) => {
    const title = `Generated API documentation`
    const description = `${title} for GAS Companion`;
    const { slug } = pageContext
    const image = ""
    const { prefix = "/api" } = pageContext

    console.log(pageContext)

    let files = data.files.edges
    const headings = []

    const getRegex = () => {
        if (prefix === `/v2/api`)  {
            return /\/GASCompanionAPI\//;
        }

        if (prefix === `/api`)  {
            return /\/GASCompanionAPI_v3\//;
        }

        if (prefix === `/v5/api`)  {
            return /\/GASCompanionAPI_v5\//;
        }
    }

    const isV2 = prefix.startsWith(`/v2/api`)
    const regex = getRegex();
    if (regex === undefined)  {
        console.error("no regex");
        return <></>;
    }

    console.log(regex)
    files = files.filter(({node}) => regex.test(node.absolutePath))

    const alphaSort = ((a, b) => a.node.name < b.node.name)

    if  (isV2) {
        files = files.sort(alphaSort)
    }
    else {
        const modularFiles = files.filter(({node}) => node.name.startsWith(`MGC`) || node.name.startsWith(`Modular`)).sort(alphaSort)
        const nonModularFiles = files.filter(({node}) => !(node.name.startsWith(`MGC`) || node.name.startsWith(`Modular`))).sort(alphaSort)
        files = modularFiles.concat(nonModularFiles)
    }

    return (
        <>
            <Seo title={title} description={description} slug={slug} image={image} />
            <Layout
                disableTableOfContents={false}
                title={title}
                headings={headings}
                slug={slug}
            >

                <p>The API documentation is auto-generated from C++ source files, and describes every Blueprint exposed nodes, functions and events.</p>

                {files.map(({ node }, i) => (
                    <h3 key={node.name}>
                        <Link to={`${prefix}${slugify(node.name)}`}>{node.name}</Link>
                    </h3>
                ))}

                <p css={css`margin: 48px 0; text-align: center; font-style: italic`}>
                    API documentation generated thanks to <Link to="http://kantandev.com/free/kantan-doc-gen">Kantan Doc Gen</Link>
                </p>

            </Layout>
        </>
    );
}

export default Docs