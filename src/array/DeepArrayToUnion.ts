export type DeepArrayToUnion<T extends any[]> = {
	[K in keyof T]: T[K] extends any[] ? DeepArrayToUnion<T[K]> : T[K];
}[number];

type Case = DeepArrayToUnion<
	[1, 2, [3, 4], ["a"], ["b", "c"], [["d"]], [[[["e"]]]]]
>; // Result:  3 | 1 | 2 | 4 | "a" | "b" | "c" | "d" | "e"

type Case1 = DeepArrayToUnion<[1, 2, [3, 4]]>; // Result:  3 | 1 | 2 | 4
