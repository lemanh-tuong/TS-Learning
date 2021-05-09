export declare type CheckElementExistInArray<T, X> = T extends readonly [
    X,
    ...infer _Rest
] ? true : T extends readonly [X] ? true : T extends readonly [infer _, ...infer Rest] ? CheckElementExistInArray<Rest, X> : false;
