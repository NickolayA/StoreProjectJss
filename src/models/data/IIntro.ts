interface IValue<T> {
  value: T;
}

// TODO export IValue

export default interface IIntro {
  Title: IValue<string>;
  Description: IValue<string>;
}
