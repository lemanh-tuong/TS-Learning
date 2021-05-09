import { Length } from "./Length";
import { Tail } from "./Tail";
import { Unshift } from "./Unshift";
export declare type DropFromHead<T extends any[], N extends number, I extends any[] = []> = {
    0: DropFromHead<Tail<T>, N, Unshift<I, any>>;
    1: T;
}[Length<I> extends N ? 1 : 0];
