export interface IPlaceholders<T = {}> {
  placeholders: { [name: string]: Array<T> };
}
