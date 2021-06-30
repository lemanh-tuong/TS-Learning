import { HasTail } from "./HasTail";
import { Head } from "./Head";
import { Tail } from "./Tail";

// Lấy phần tử cuối cùng của mảng
export type Last<T extends any[]> = {
	0: Last<Tail<T>>;
	1: Head<T>;
}[HasTail<T> extends true ? 0 : 1];

// type Case1 = Last<[1, 2, 3, 4]>; // Result: 4
