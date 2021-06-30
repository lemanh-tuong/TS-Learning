export type IsRequired<T, K extends keyof T> = Pick<T, K> extends Record<
	K,
	T[K]
>
	? true
	: false;

type A = IsRequired<{ a: boolean; b?: string }, "a">; // true
type B = IsRequired<{ a: boolean; b?: string }, "b">; // false
