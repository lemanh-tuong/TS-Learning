export declare type ExclusiveObject<T1, T2 extends T1> = {
    [K in keyof T2]: K extends keyof T1 ? T2[K] : never;
};
