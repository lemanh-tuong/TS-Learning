declare type Transform<A> = A extends Promise<infer Inner> ? Inner : never;
export declare type GetGeneric<T> = Transform<Promise<T>>;
export {};
