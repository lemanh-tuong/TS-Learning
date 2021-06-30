import { UnionToIntersection } from "./UnionToIntersection";
export type LastOfUnion<T> = UnionToIntersection<
	T extends any ? () => T : never
> extends () => infer R
	? R
	: never;

// type Case1 = LastOfUnion<"A" | "B" | "C">;
// type Case2 = LastOfUnion<ArrayToUnion<[1, 2, true, 'asd']>>;
