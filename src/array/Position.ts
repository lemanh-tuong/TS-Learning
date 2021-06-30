import { Length } from "./Length";
import { Tail } from "./Tail";
import { Unshift } from "./Unshift";

// Dùng cho biến đếm
export type Position<T extends any[]> = Length<T>;
export type Next<T extends any[]> = Unshift<T, any>;
export type Prev<T extends any[]> = Tail<T>;

// type CasePosition = Position<[any, any]>; // Result: 2
// type CaseNext = Next<[any, any]>; // Result: 2
// type CasePrev = Prev<[any, any]>; // Result: 2

export type Iterator<
	Index extends number = 0,
	From extends any[] = [],
	I extends any[] = []
> = {
	0: Iterator<Index, Next<From>, Next<I>>;
	1: From;
}[Position<I> extends Index ? 1 : 0];

// Thêm n phần tử any vào đầu mảng
// type Case1 = Iterator<2>; // Result: [any, any]
// type Case2 = Iterator<3, [any, any]>; // Result: [any, any, any, any, any]
