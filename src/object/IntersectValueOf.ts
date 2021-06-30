// intersection of all value types
export type IntersectValueOf<T> = {
	[K in keyof T]: (x: T[K]) => void;
} extends Record<keyof T, (x: infer V) => void>
	? V
	: never;

type Test = {
	foo: { a: string };
	bar: { b: number };
	baz: { c: boolean };
};

type Case1 = IntersectValueOf<Test>;
