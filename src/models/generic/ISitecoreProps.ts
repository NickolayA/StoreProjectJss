import ISitecoreRendering from './ISitecoreRendering';

export interface ISitecoreProps<T = {}, P = {}, M = {}, K = {}> {
  rendering: ISitecoreRendering<M, K>;
  fields: T; // refactor for fields?
  params: P;
  componentFactory: any;
}
