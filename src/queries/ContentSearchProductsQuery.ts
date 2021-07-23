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
                jss
              }
              OfferDate: field(name: "OfferDate"){
                jss
              }
              Image: field(name: "Image"){
                jss
              }
          }
        }
      }
    }
}
`;

export default ContentSearchProductsQuery;
