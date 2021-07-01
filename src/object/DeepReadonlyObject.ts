export type DeepReadonlyObject<T> = T extends (infer R)[]
	? _DeepReadonlyArray<R>
	: T extends Function
	? T
	: T extends object
	? _DeepReadonlyObject<T>
	: T;

interface _DeepReadonlyArray<T> extends Array<DeepReadonlyObject<T>> {}

type _DeepReadonlyObject<T> = {
	readonly [P in keyof T]: DeepReadonlyObject<T[P]>;
};

const a = {
	key1: 1,
	key2: "key2",
	key3: false,
};

type Case1 = DeepReadonlyObject<typeof a>;
// Result : {
//   readonly key1: number;
//   readonly key2: string;
//   readonly key3: boolean;
// }
