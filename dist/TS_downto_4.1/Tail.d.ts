export declare type Tail<T> = T extends [infer _I, ...infer Rest] ? Rest : never;
