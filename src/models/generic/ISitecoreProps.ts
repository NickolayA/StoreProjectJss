import ISitecoreRendering from './ISitecoreRendering';
import ISitecoreFields from './ISitecoreFields';

export interface ISitecoreProps<T = {}, P = {}, M = {}, K = {}> extends ISitecoreFields<T> {
  rendering: ISitecoreRendering<M, K>;
  params: P;
  componentFactory: any;
}
