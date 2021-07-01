export type DeepReadonlyArray<T> = T extends (infer R)[]
	? _DeepReadonlyArray<R>
	: T extends Function
	? T
	: T extends object
	? _DeepReadonlyObject<T>
	: T;

interface _DeepReadonlyArray<T> extends Array<DeepReadonlyArray<T>> {}

type _DeepReadonlyObject<T> = {
	readonly [P in keyof T]: DeepReadonlyArray<T[P]>;
};
