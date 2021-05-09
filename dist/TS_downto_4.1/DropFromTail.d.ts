import { Head } from "./Head";
import { Length } from "./Length";
import { Push } from "./Push";
import { Tail } from "./Tail";
export declare type DropFromTail<T extends any[], N extends number, I extends any[] = []> = {
    0: DropFromTail<Tail<T>, N, Push<I, Head<T>>>;
    1: I;
}[Length<T> extends N ? 1 : 0];
