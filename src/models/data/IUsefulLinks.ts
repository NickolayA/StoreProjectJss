import ISitecoreMultilistItem from '../generic/ISitecoreMultilistItem';
import ILink from './ILink';

export default interface IUsefulLinks {
  Links: ISitecoreMultilistItem<ILink>[];
}
