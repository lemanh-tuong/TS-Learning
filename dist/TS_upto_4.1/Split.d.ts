import { Recurse } from "../HackTypeInfiniteExecute/Recurse";
import { Push } from "../TS_downto_4.1/Push";
declare type _Split<S extends string, D extends string, A extends any[] = []> = S extends `${infer T}${D}${infer U}` ? {
    __rec: _Split<U, D, Push<A, T>>;
} : A;
export declare type Split<S extends string, D extends string> = Recurse<_Split<S, D>>;
export {};
