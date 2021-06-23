export default interface ISitecoreMultilistItem<T> {
  id: string;
  url: string;
  name: string;
  displayName?: string;
  fields: T;
}
