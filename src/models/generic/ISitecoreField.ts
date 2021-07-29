import ISitecoreImage from './ISitecoreImage';
import IValue from './IValue';

export default interface ISitecoreField<T> {
  name: string;
  value?: T;
  editable?: string;
  jss?: IValue<ISitecoreImage>;
}
