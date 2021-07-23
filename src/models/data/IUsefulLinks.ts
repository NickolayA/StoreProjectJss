import ISitecoreField from '../generic/ISitecoreField';
import ISitecoreMultilistItem from '../generic/ISitecoreMultilistItem';
import ILink from './ILink';

export default interface IUsefulLinks {
  Title: ISitecoreField<string>;
  Links: ISitecoreMultilistItem<ILink>[];
}
