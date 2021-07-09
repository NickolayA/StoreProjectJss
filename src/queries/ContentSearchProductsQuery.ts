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
              url
              Title: field(name: "Title"){
                rendered
                value
                jss
              }
              OfferDate: field(name: "OfferDate"){
                rendered
                value
                jss
              }
              Image: field(name: "Image"){
                rendered
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
