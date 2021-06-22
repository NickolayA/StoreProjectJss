import ISitecoreImage from './ISitecoreImage';
import ISitecoreValue from './ISitecoreValue';

export default interface ISitecoreField<T> {
  name: string;
  value?: T;
  editable?: string;
  jss?: ISitecoreValue<ISitecoreImage>;
}
