import { gql } from '@apollo/client';

const IntroQuery = (itemID: string, itemLanguage: string) => gql`
{
    item(path: "${itemID}", language: "${itemLanguage}")
    {
        Title: field(name: "Title"){
            jss
        }
        Description: field(name: "Description"){
            jss
        }
    }
}
`;

export default IntroQuery;
