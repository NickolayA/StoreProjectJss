export default interface ISitecoreRendering<T = {}, P = {}> {
  componentName: string;
  dataSource: string;
  fields: T;
  params: P;
  uid: string;
}
