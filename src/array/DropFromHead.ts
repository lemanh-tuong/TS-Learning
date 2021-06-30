import { Length } from "./Length";
import { Tail } from "./Tail";
import { Unshift } from "./Unshift";

// Xóa đi N phần tử đầu tiên của mảng
// bỏ đầu Lấy Tail liên tục rồi tăng biến đếm I cho đến khi = N (số phần tử bị xóa) thì dừng

export type DropFromHead<
	T extends any[],
	N extends number,
	I extends any[] = []
> = {
	0: DropFromHead<Tail<T>, N, Unshift<I, any>>;
	1: T;
}[Length<I> extends N ? 1 : 0];
