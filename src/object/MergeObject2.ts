export type MergeObject2<A extends object, B extends object> = Omit<
	A,
	keyof B
> &
	B;

type X = {
	a: 1;
	b: number;
};
type Y = {
	a: 2;
	b: string;
	c: boolean;
};

type XY = MergeObject2<X, Y>;

const a: XY = {
	a: 2,
	b: "1",
}; // Missing c

console.log(a);
