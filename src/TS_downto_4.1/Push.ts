export type Push<T extends any[], E> = ((head: E, ...args: T) => any) extends (
  head: infer Element,
  ...args: infer Array
) => any
  ? [...Array, Element]
  : T;

// type Case1 = Push<[1, 2, 3], 4>; // Result: [1, 2, 3, 4]
