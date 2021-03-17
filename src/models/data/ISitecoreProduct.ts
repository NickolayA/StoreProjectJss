import { ImageField } from "@sitecore-jss/sitecore-jss-react/types/components/Image";
import ISitecoreField  from "../generic/ISitecoreField";
import ISitecoreImage  from "../generic/ISitecoreImage";

export default interface ISitecoreProduct
{
    Title: ISitecoreField<string>;
    Description: ISitecoreField<string>;
    Image: ImageField;
    OfferDate: ISitecoreField<string>;
    Quantity: ISitecoreField<string>;
}
