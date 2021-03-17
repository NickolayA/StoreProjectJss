import { gql } from '@apollo/client';

const ContentSearchProductsQuery = (
  rootItemId: string,
  templateName: string,
  language: string
) => gql`
{
    search(rootItem: "${rootItemId}", fieldsEqual: [{name: "_templateName", value: "${templateName}"}], language: "${language}") {
      results {
        items {
            item {
            fields(ownFields: true) {
              name
              value
              jss
            }
          }
        }
      }
    }
}
`;

export default ContentSearchProductsQuery;
