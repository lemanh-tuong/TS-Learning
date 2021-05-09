export declare type DeepArrayToUnion<T extends any[]> = {
    [K in keyof T]: T[K] extends any[] ? DeepArrayToUnion<T[K]> : T[K];
}[number];
