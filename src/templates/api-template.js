import { graphql } from 'gatsby';
import ApiDocsComponent from '../components/api-docs';

export default ApiDocsComponent;

export const query = graphql`
  query($directory: String!, $classParent: String!) {
    files: allFile(filter: {extension: {eq: "xml"}, relativeDirectory: { eq: $directory }}) {
      edges {
        node {
          name
          extension
          relativePath
          relativeDirectory
        }
      }
    }

    members: allApiDocsNode(filter: {classParent: {eq: $classParent }}) {
      edges {
        node {
          name
          type
          relativeDirectory
          basename
          classParent
          dirname
          xml {
            name
            content
            xmlChildren {
              name
              children {
                name
                content
              }
              content
            }
          }
        }
      }
    }

    images: allImageSharp {
      edges {
        node {
          original {
            width
            height
            src
          }
          parent {
            ... on File {
              name
              relativePath
              relativeDirectory
            }
          }

          fixed(width: 750) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;