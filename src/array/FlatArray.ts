//https://github.com/microsoft/TypeScript/issues/40250
// Cách này không hay lắm nhưng k đệ quy đc nên tạm thời

export type FlatArray<A extends unknown[]> = ReturnType<
	A extends [infer U, ...infer V]
		? U extends unknown[]
			? () => [...U, ...FlatArray<V>]
			: () => [U, ...FlatArray<V>]
		: () => A
>;

type Case1 = FlatArray<[["a", "b"], ["c", "d"]]>; // Result ["a", "b", "c", "d"]
type Case2 = FlatArray<[["a", "b", ["e", "g", "h"]], ["c", "d"]]>; // Result ["a", "b", ["e", "g", "h"], "c", "d"]
