export type AppendToObjectWithKeyValue<T, Key extends string, Value> = {
	[key in keyof T | Key]: key extends keyof T ? T[key] : Value;
};

type A = AppendToObjectWithKeyValue<{ a: string }, "abc", 123>; // Result: { abc: 123; a: string; }
