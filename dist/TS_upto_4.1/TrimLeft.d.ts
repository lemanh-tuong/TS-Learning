export declare type TrimLeft<V extends string> = V extends ` ${infer R}` ? TrimLeft<R> : V;
