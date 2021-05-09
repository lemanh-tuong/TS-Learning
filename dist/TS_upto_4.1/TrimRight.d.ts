export declare type TrimRight<V extends string> = V extends `${infer R} ` ? TrimRight<R> : V;
