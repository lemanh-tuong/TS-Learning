export type ExclusiveObject<T1, T2 extends T1> = {
	[K in keyof T2]: K extends keyof T1 ? T2[K] : never;
};

type SomeType = {
	prop: string;
};
// change below function type definition 🔥 in order to allow only strict SomeType value
function takeSomeTypeOnlyWithExclusive<T extends SomeType>(
	x: ExclusiveObject<SomeType, T>
) {
	return x;
}
function takeSomeTypeOnlyWithoutExclusive(x: SomeType) {
	return x;
}
const x = { prop: "a" };
takeSomeTypeOnlyWithExclusive(x); // this should be ok 🟢
const x2 = { prop: "a" };
takeSomeTypeOnlyWithoutExclusive(x2);

const y = { prop: "a", addditionalProp: "x" };
const y2 = { prop: "a", addditionalProp: "123" };
// takeSomeTypeOnlyWithExclusive(y);
takeSomeTypeOnlyWithoutExclusive(y2); // here we should have compile error 🛑
