import ISitecoreField from '../generic/ISitecoreField';

export default interface IBaseProduct {
  Title: ISitecoreField<string>;
  Description?: ISitecoreField<string>;
}
