import { CheckElementExistInArray } from "./CheckElementExistInArray";
import { MutableArray } from "./MutableArray";

export type UniqueArray<T> = T extends readonly [infer X, ...infer Rest]
	? CheckElementExistInArray<Rest, X> extends true
		? ["Encountered value with duplicates:", X]
		: readonly [X, ...UniqueArray<Rest>]
	: T;

const data = [[1, 2], [1, 2], 2, 3, 4] as const;

type Case1 = UniqueArray<MutableArray<typeof data>>; // Result: ["Encountered value with duplicates:", [1, 2]]
