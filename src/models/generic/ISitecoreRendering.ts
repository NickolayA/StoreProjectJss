import ISitecoreFields from './ISitecoreFields';

export default interface ISitecoreRendering<T = {}, P = {}> extends ISitecoreFields<T> {
  componentName: string;
  dataSource: string;
  params: P;
  uid: string;
}
