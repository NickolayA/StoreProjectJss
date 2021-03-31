export default interface ISitecoreMultilistItem<T> {
  id: string;
  url: string;
  name: string;
  fields: T;
}
