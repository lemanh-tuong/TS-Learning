export declare type Unshift<T extends any[], E> = ((head: E, ...args: T) => any) extends (...args: infer U) => any ? U : T;
