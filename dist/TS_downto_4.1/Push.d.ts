export declare type Push<T extends any[], E> = ((head: E, ...args: T) => any) extends (head: infer Element, ...args: infer Array) => any ? [...Array, Element] : T;
