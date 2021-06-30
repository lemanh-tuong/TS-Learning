import { Length } from "./Length";
import { Next, Position } from "./Position";
import { Unshift } from "./Unshift";

export type Reverse<
	T extends any[],
	R extends any[] = [],
	I extends any[] = []
> = {
	0: Reverse<T, Unshift<R, T[Position<I>]>, Next<I>>;
	1: R;
}[Position<I> extends Length<T> ? 1 : 0];

type Case1 = Reverse<[1, 2, 3, 4]>; // Result: [4, 3, 2, 1]
type Case2 = Reverse<[1, 2], [3, 4]>; // Result:  [2, 1, 3, 4]
type Case3 = Reverse<[1, 2], [3, 4], [5, 6]>; // Result: [3, 4]
