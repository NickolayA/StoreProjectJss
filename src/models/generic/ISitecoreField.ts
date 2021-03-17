import ISitecoreImage from "./ISitecoreImage";
import ISitecoreValue from "./ISitecoreValue";

export default interface ISitecoreField<T>
{
    name: string;
    value?: T;
    jss?: ISitecoreValue<ISitecoreImage>
}