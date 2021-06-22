import { ImageField } from '@sitecore-jss/sitecore-jss-react';
import ISitecoreField from '../generic/ISitecoreField';

export default interface IHeroBanner {
  Text: ISitecoreField<string>;
  Image: ImageField;
}
