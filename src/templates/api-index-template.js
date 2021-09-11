import { graphql } from 'gatsby';
import ApiDocsComponent from '../components/api-index';

export default ApiDocsComponent;

export const query = graphql`
  query {
    files: allFile(
      filter: {extension: {eq: "xml"}, relativeDirectory: {regex: "/^[^\\/]+$/"}}
    ) {
      group(field: sourceInstanceName) {
        totalCount
      }
      edges {
        node {
          id
          name
          extension
          relativePath
          relativeDirectory
          absolutePath
        }
      }
    }
  }
`;