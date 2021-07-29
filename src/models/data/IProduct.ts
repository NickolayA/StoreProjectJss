import ISitecoreImage from '../generic/ISitecoreImage';
import IValue from '../generic/IValue';

export default interface IProduct {
  Title: IValue<string>;
  Image: IValue<ISitecoreImage>;
  OfferDate: IValue<string>;
  Url: string;
}
