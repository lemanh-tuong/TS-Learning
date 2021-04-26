import { GetRequired } from "./GetRequired";

export type GetOptional<T> = Omit<T, keyof GetRequired<T>>;
