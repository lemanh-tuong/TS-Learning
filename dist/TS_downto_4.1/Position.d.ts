import { Length } from "./Length";
import { Tail } from "./Tail";
import { Unshift } from "./Unshift";
export declare type Position<T extends any[]> = Length<T>;
export declare type Next<T extends any[]> = Unshift<T, any>;
export declare type Prev<T extends any[]> = Tail<T>;
export declare type Iterator<Index extends number = 0, From extends any[] = [], I extends any[] = []> = {
    0: Iterator<Index, Next<From>, Next<I>>;
    1: From;
}[Position<I> extends Index ? 1 : 0];
