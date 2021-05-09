import { HasTail } from "./HasTail";
import { Head } from "./Head";
import { Tail } from "./Tail";
export declare type Last<T extends any[]> = {
    0: Last<Tail<T>>;
    1: Head<T>;
}[HasTail<T> extends true ? 0 : 1];
