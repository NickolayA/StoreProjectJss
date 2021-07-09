interface IValue<T> {
  value: T;
}

interface IImage {
  src: string;
  alt: string;
  height: string;
  width: string;
}

export default interface IProduct {
  Title: IValue<string>;
  Image: IValue<IImage>;
  OfferDate: IValue<string>;
  Url: string;
}
