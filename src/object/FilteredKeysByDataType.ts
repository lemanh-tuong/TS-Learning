export type FilteredKeysByDataType<T, U> = {
	[P in keyof T]: T[P] extends U ? P : never;
}[keyof T];
// type PickByValueType<T, U> = {
//   [K in keyof T as K extends K ? T[K] extends U ? K : never : never]: T[K]
// }
type Case1 = FilteredKeysByDataType<
	{ test: "test"; test2: 123; test3: boolean },
	string | number
>; // Result 'test1' | 'test2';
