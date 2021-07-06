export interface ISitecoreProps<T = {}> {
  rendering: any;
  fields: T; // refactor for fields?
  params: any;
  componentFactory: any;
}
