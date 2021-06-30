import { UnionToIntersection } from "../union";

// Helper Type
type NonObjectKeysOf<T> = {
	[K in keyof T]: T[K] extends Array<any>
		? K
		: T[K] extends object
		? never
		: K;
}[keyof T];

type ValuesOf<T> = T[keyof T];
type ObjectValuesOf<T extends Object> = Exclude<
	Exclude<Extract<ValuesOf<T>, object>, never>,
	Array<any>
>;

///////////////////////////////////////
export type DeepFlatten<T> = T extends any
	? Pick<T, NonObjectKeysOf<T>> &
			UnionToIntersection<DeepFlatten8<ObjectValuesOf<T>>>
	: never;

type DeepFlatten8<T> = T extends any
	? Pick<T, NonObjectKeysOf<T>> &
			UnionToIntersection<DeepFlatten7<ObjectValuesOf<T>>>
	: never;

type DeepFlatten7<T> = T extends any
	? Pick<T, NonObjectKeysOf<T>> &
			UnionToIntersection<DeepFlatten6<ObjectValuesOf<T>>>
	: never;

type DeepFlatten6<T> = T extends any
	? Pick<T, NonObjectKeysOf<T>> &
			UnionToIntersection<DeepFlatten5<ObjectValuesOf<T>>>
	: never;

type DeepFlatten5<T> = T extends any
	? Pick<T, NonObjectKeysOf<T>> &
			UnionToIntersection<DeepFlatten4<ObjectValuesOf<T>>>
	: never;

type DeepFlatten4<T> = T extends any
	? Pick<T, NonObjectKeysOf<T>> &
			UnionToIntersection<DeepFlatten3<ObjectValuesOf<T>>>
	: never;

type DeepFlatten3<T> = T extends any
	? Pick<T, NonObjectKeysOf<T>> &
			UnionToIntersection<DeepFlatten2<ObjectValuesOf<T>>>
	: never;

type DeepFlatten2<T> = T extends any
	? Pick<T, NonObjectKeysOf<T>> &
			UnionToIntersection<DeepFlatten1<ObjectValuesOf<T>>>
	: never;

type DeepFlatten1<T> = T extends any
	? Pick<T, NonObjectKeysOf<T>>
	: UnionToIntersection<ObjectValuesOf<T>>;

/* TESTING */

type Model = {
	foo: number;
	bar: string;
	baz: {
		qux: Array<string>;
		quux: {
			quuz: number | string;
			corge: boolean;
		};
		flob: number;
	};
	wobble: {
		doop: string;
	};
};

// const flattenedModel: DeepFlatten<Model> = {
//   foo: 1,
//   bar: "abc",
//   qux: ["abc"],
//   quuz: 2,
//   corge: true,
//   flob: 3,
//   doop: "abcd",
// };

// const incorrectFlattenedModel: DeepFlatten<Model> = {
//   foo: 1,
//   bar: "abc",
//   qux: ["abc"],
//   quuz: 2,
//   flob: 3,
//   doop: "abcd",
// };
