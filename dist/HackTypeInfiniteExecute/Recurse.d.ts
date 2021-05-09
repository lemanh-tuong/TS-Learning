declare type _Recurse<T> = T extends {
    __rec: never;
} ? never : T extends {
    __rec: {
        __rec: infer U;
    };
} ? {
    __rec: _Recurse<U>;
} : T extends {
    __rec: infer U;
} ? U : T;
export declare type Recurse<T> = T extends {
    __rec: unknown;
} ? Recurse<_Recurse<T>> : T;
export {};
