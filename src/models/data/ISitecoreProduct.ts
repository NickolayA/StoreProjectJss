import { ImageField } from '@sitecore-jss/sitecore-jss-react/types/components/Image';
import { RichText } from '@sitecore-jss/sitecore-jss-react/types/components/RichText'; // TODO REMOVE
import ISitecoreField from '../generic/ISitecoreField';
import ISitecoreImage from '../generic/ISitecoreImage'; // TODO REMOVE
import IBaseProduct from './IBaseProduct';

// TODO move Title, Description to separate class

export default interface ISitecoreProduct extends IBaseProduct {
  ShortDescription: ISitecoreField<string>;
  Image: ImageField;
  OfferDate: ISitecoreField<string>;
  Quantity: ISitecoreField<string>;
}
