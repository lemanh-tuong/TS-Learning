export declare type ExtractRouteParams<T extends string> = T extends `${infer Pathname}:${infer Param}/${infer Rest}` ? {
    [k in Param | keyof ExtractRouteParams<Rest>]: string;
} : T extends `${infer Pathname}:${infer Param}` ? {
    [k in Param]: string;
} : {};
