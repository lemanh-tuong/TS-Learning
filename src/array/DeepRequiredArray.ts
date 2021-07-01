/** Essentials */
type Primitive = string | number | boolean | bigint | symbol | undefined | null;
type Builtin = Primitive | Function | Date | Error | RegExp;

/** Like Required but recursive */
export type DeepRequiredArray<T> = T extends Builtin
	? NonNullable<T>
	: T extends Map<infer K, infer V>
	? Map<DeepRequiredArray<K>, DeepRequiredArray<V>>
	: T extends ReadonlyMap<infer K, infer V>
	? ReadonlyMap<DeepRequiredArray<K>, DeepRequiredArray<V>>
	: T extends WeakMap<infer K, infer V>
	? WeakMap<DeepRequiredArray<K>, DeepRequiredArray<V>>
	: T extends Set<infer U>
	? Set<DeepRequiredArray<U>>
	: T extends ReadonlySet<infer U>
	? ReadonlySet<DeepRequiredArray<U>>
	: T extends WeakSet<infer U>
	? WeakSet<DeepRequiredArray<U>>
	: T extends Promise<infer U>
	? Promise<DeepRequiredArray<U>>
	: T extends {}
	? { [K in keyof T]-?: DeepRequiredArray<T[K]> }
	: NonNullable<T>;

type Case2 = DeepRequiredArray<
	[[4, [5, [6, 7]]], 1?, 2?, 3?, [8, [9, 10, 11?]?]?]
>; // Result:  [[4, [5, [6, 7]]], 1, 2, 3, [8, [9, 10, 11]]]

type Case1 = DeepRequiredArray<{
	key1?: {
		key2?: {
			key3?: {
				abc?: boolean;
			};
		};
		key4: null;
	};
}>;
// Result :{
//     key1: {
//       key2: {
//           key3: {
//               abc: boolean;
//           };
//       };
//       key4: never;
//   };
// }
