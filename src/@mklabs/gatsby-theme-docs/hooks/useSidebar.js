import { graphql, useStaticQuery } from 'gatsby';
import { resolveLink } from '@mklabs/gatsby-theme-docs-core/util/url';

export function useSidebar(slug = "") {
  const data = useStaticQuery(graphql`
    {
      allSidebarItems {
        edges {
          node {
            label
            link
            items {
              label
              link
            }
            id
            parent {
              ... on File {
                name
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          basePath
        }
      }
    }
  `);

  const { basePath } = data.site.siteMetadata;

  let {
    allSidebarItems: { edges },
  } = data;

  const isV2 = slug.startsWith("/v2");
  const sidebarFilename = isV2 ? "sidebar_v2" : "sidebar";
  edges = edges.filter(({ node }) => node.parent.name === sidebarFilename)

  if (basePath) {
    const normalizedSidebar = edges.map(
      ({ node: { label, link, items, id } }) => {
        if (Array.isArray(items)) {
          items = items.map((item) => ({
            label: item.label,
            link: resolveLink(item.link, basePath),
          }));
        }

        return {
          node: {
            id,
            label,
            items,
            link: resolveLink(link, basePath),
          },
        };
      },
    );

    return normalizedSidebar;
  }

  return edges;
}
