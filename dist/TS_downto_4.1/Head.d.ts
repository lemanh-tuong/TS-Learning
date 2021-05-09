export declare type Head<T> = T extends [infer I, ...infer _Rest] ? I : never;
