import { GetRequired } from "./GetRequired";

export type GetOptional<T> = Omit<T, keyof GetRequired<T>>;

type MyObject = {
	a: string;
	b?: number;
};

type Case1 = GetOptional<MyObject>; // Result: { b?: number; }
