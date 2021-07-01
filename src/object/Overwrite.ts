export type Overwrite<T1, T2> = {
	[P in Exclude<keyof T1, keyof T2>]: T1[P];
} &
	T2;

type MyObj = {
	a: number;
	b: string;
	c: null;
};

type Case1 = Overwrite<MyObj, { a: [1, 2, 3] }>;

// Result: {
//     b: string;
//     c: null;
// } & {
//     a: [1, 2, 3];
// }
