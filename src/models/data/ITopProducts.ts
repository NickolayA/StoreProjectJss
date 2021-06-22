import ISitecoreMultilistItem from '../generic/ISitecoreMultilistItem';
import IBaseProduct from './IBaseProduct';
import ISitecoreProduct from './ISitecoreProduct';

export default interface ITopProducts extends IBaseProduct {
  ListOfProducts: ISitecoreMultilistItem<ISitecoreProduct>[];
}
