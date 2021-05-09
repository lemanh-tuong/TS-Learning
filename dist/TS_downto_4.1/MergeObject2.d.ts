import { Head } from "./Head";
import { Tail } from "./Tail";
declare type Zip_DeepMergeTwoTypes<T, U> = T extends [] ? U : U extends [] ? T : [
    DeepMergeTwoTypes<Head<T>, Head<U>>,
    ...Zip_DeepMergeTwoTypes<Tail<T>, Tail<U>>
];
/**
 * Take two objects T and U and create the new one with uniq keys for T a U objectI
 * helper generic for `DeepMergeTwoTypes`
 */
declare type GetObjDifferentKeys<T, U, T0 = Omit<T, keyof U> & Omit<U, keyof T>, T1 = {
    [K in keyof T0]: T0[K];
}> = T1;
/**
 * Take two objects T and U and create the new one with the same objects keys
 * helper generic for `DeepMergeTwoTypes`
 */
declare type GetObjSameKeys<T, U> = Omit<T | U, keyof GetObjDifferentKeys<T, U>>;
declare type MergeTwoObjects<T, U, T0 = Partial<GetObjDifferentKeys<T, U>> & {
    [K in keyof GetObjSameKeys<T, U>]: DeepMergeTwoTypes<T[K], U[K]>;
}, T1 = {
    [K in keyof T0]: T0[K];
}> = T1;
export declare type DeepMergeTwoTypes<T, U> = [
    T,
    U
] extends [any[], any[]] ? Zip_DeepMergeTwoTypes<T, U> : [
    T,
    U
] extends [{
    [key: string]: unknown;
}, {
    [key: string]: unknown;
}] ? MergeTwoObjects<T, U> : T | U;
export {};
