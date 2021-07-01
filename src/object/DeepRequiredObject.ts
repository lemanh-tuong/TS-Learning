// https://github.com/krzkaczor/ts-essentials
/** Essentials */
type Primitive = string | number | boolean | bigint | symbol | undefined | null;
type Builtin = Primitive | Function | Date | Error | RegExp;

/** Like Required but recursive */
export type DeepRequiredObject<T> = T extends Builtin
	? NonNullable<T>
	: T extends Map<infer K, infer V>
	? Map<DeepRequiredObject<K>, DeepRequiredObject<V>>
	: T extends ReadonlyMap<infer K, infer V>
	? ReadonlyMap<DeepRequiredObject<K>, DeepRequiredObject<V>>
	: T extends WeakMap<infer K, infer V>
	? WeakMap<DeepRequiredObject<K>, DeepRequiredObject<V>>
	: T extends Set<infer U>
	? Set<DeepRequiredObject<U>>
	: T extends ReadonlySet<infer U>
	? ReadonlySet<DeepRequiredObject<U>>
	: T extends WeakSet<infer U>
	? WeakSet<DeepRequiredObject<U>>
	: T extends Promise<infer U>
	? Promise<DeepRequiredObject<U>>
	: T extends {}
	? { [K in keyof T]-?: DeepRequiredObject<T[K]> }
	: NonNullable<T>;

type Case2 = DeepRequiredObject<
	[[4, [5, [6, 7]]], 1?, 2?, 3?, [8, [9, 10, 11?]?]?]
>; // Result:  [[4, [5, [6, 7]]], 1, 2, 3, [8, [9, 10, 11]]]

type Case1 = DeepRequiredObject<{
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
