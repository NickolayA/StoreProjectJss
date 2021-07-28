import { ImageField } from '@sitecore-jss/sitecore-jss-react/types/components/Image';
import ISitecoreField from '../generic/ISitecoreField';
import IBaseProduct from './IBaseProduct';

export default interface ISitecoreProduct extends IBaseProduct {
  ShortDescription: ISitecoreField<string>;
  Image: ImageField;
  OfferDate: ISitecoreField<string>;
  Quantity: ISitecoreField<string>;
}
