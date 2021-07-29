import ISitecoreFields from './ISitecoreFields';

export default interface ISitecoreMultilistItem<T = {}> extends ISitecoreFields<T> {
  id: string;
  url: string;
  name: string;
  displayName?: string;
}
