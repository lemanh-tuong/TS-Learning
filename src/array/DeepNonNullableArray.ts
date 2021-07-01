// https://github.com/krzkaczor/ts-essentials
/** Essentials */
export type Primitive =
	| string
	| number
	| boolean
	| bigint
	| symbol
	| undefined
	| null;
export type Builtin = Primitive | Function | Date | Error | RegExp;
/** Like NonNullable but recursive */
export type DeepNonNullableArray<T> = T extends Builtin
	? NonNullable<T>
	: T extends Map<infer K, infer V>
	? Map<DeepNonNullableArray<K>, DeepNonNullableArray<V>>
	: T extends ReadonlyMap<infer K, infer V>
	? ReadonlyMap<DeepNonNullableArray<K>, DeepNonNullableArray<V>>
	: T extends WeakMap<infer K, infer V>
	? WeakMap<DeepNonNullableArray<K>, DeepNonNullableArray<V>>
	: T extends Set<infer U>
	? Set<DeepNonNullableArray<U>>
	: T extends ReadonlySet<infer U>
	? ReadonlySet<DeepNonNullableArray<U>>
	: T extends WeakSet<infer U>
	? WeakSet<DeepNonNullableArray<U>>
	: T extends Promise<infer U>
	? Promise<DeepNonNullableArray<U>>
	: T extends {}
	? { [K in keyof T]: DeepNonNullableArray<T[K]> }
	: NonNullable<T>;

type Case2 = DeepNonNullableArray<[null, 1, 2, "str"]>;
type Case1 = DeepNonNullableArray<{
	a: null;
	b: boolean;
	c: undefined;
	d: string;
}>;
