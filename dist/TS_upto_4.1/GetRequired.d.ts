import { IsRequired } from "./IsRequired";
export declare type GetRequired<T> = {
    [K in keyof T as IsRequired<T, K> extends true ? K : never]: T[K];
};
