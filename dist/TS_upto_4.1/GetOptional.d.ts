import { GetRequired } from "./GetRequired";
export declare type GetOptional<T> = Omit<T, keyof GetRequired<T>>;
