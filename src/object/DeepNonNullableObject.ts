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
export type DeepNonNullableObject<T> = T extends Builtin
	? NonNullable<T>
	: T extends Map<infer K, infer V>
	? Map<DeepNonNullableObject<K>, DeepNonNullableObject<V>>
	: T extends ReadonlyMap<infer K, infer V>
	? ReadonlyMap<DeepNonNullableObject<K>, DeepNonNullableObject<V>>
	: T extends WeakMap<infer K, infer V>
	? WeakMap<DeepNonNullableObject<K>, DeepNonNullableObject<V>>
	: T extends Set<infer U>
	? Set<DeepNonNullableObject<U>>
	: T extends ReadonlySet<infer U>
	? ReadonlySet<DeepNonNullableObject<U>>
	: T extends WeakSet<infer U>
	? WeakSet<DeepNonNullableObject<U>>
	: T extends Promise<infer U>
	? Promise<DeepNonNullableObject<U>>
	: T extends {}
	? { [K in keyof T]: DeepNonNullableObject<T[K]> }
	: NonNullable<T>;

type Case2 = DeepNonNullableObject<[null, 1, 2, "str"]>;
type Case1 = DeepNonNullableObject<{
	a: null;
	b: boolean;
	c: undefined;
	d: string;
}>;
