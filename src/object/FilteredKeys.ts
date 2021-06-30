export type FilteredKeys<T, U> = {
	[P in keyof T]: T[P] extends U ? P : never;
}[keyof T];

type Case1 = FilteredKeys<
	{ test: "test"; test2: 123; test3: boolean },
	string | number
>; // Result 'test1' | 'test2';