import { Length } from "./Length";
import { Next, Position } from "./Position";
import { Unshift } from "./Unshift";
export declare type Reverse<T extends any[], R extends any[] = [], I extends any[] = []> = {
    0: Reverse<T, Unshift<R, T[Position<I>]>, Next<I>>;
    1: R;
}[Position<I> extends Length<T> ? 1 : 0];
