import React from 'react';
import { css } from '@emotion/react';

import Layout from '@mklabs/gatsby-theme-docs/src/components/Layout';
import SEO from '@mklabs/gatsby-theme-docs/src/components/SEO';
// import slugify from '@mklabs/gatsby-theme-docs/src/util/slug';
import slugify from "../utils/slugify";
import { Link } from "gatsby";

const Docs = ({ data }) => {
    const title = `Generated API documentation`
    const description = `${title} for GAS Companion`;
    const slug = "api"
    const image = ""

    const files = data.files.edges

    const headings = []
    
    return (
        <>
            <SEO title={title} description={description} slug={slug} image={image} />
            <Layout
                disableTableOfContents={false}
                title={title}
                headings={headings}
            >

                <p>The API documentation is auto-generated from C++ source files, and describes every Blueprint exposed nodes, functions and events.</p>

                {files.map(({ node }) => (
                    <h3 key={node.name}>
                        <Link to={`/api${slugify(node.name)}`}>{node.name}</Link>
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