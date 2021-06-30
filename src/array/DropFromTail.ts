import { Head } from "./Head";
import { Length } from "./Length";
import { Push } from "./Push";
import { Tail } from "./Tail";

// Xóa đi N phần tử đầu tiên của mảng
// bỏ đầu Lấy Tail liên tục rồi tăng biến đếm I cho đến khi = N (số phần tử bị xóa) thì dừng

export type DropFromTail<
	T extends any[],
	N extends number,
	I extends any[] = []
> = {
	0: DropFromTail<Tail<T>, N, Push<I, Head<T>>>;
	1: I;
}[Length<T> extends N ? 1 : 0];

// type Case1 = DropFromTail<[1, 2, 3, 4], 2>; // Result: [1, 2]
