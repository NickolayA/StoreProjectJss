import { gql } from '@apollo/client';

const IntroQuery = (itemID: string, itemLanguage: string) => gql`
{
    item(path: "${itemID}", language: "${itemLanguage}")
    {
        fields(ownFields: true){
            name
            value
        }
    }
}
`;

export default IntroQuery;
