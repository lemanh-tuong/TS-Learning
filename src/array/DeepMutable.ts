const deepArrA = [1, [2, 3, [4]]] as const;
const deepArrB = [1, [2, [3, [4]]]] as const;

const deepArrC = [
	{ name: "Tuong", age: 18, id: 1 },
	{ name: "Tuong1", age: 11, id: 2 },
	{ name: "Tuong2", age: 2, id: 3 },
] as const;

export type DeepMutable<T> = { -readonly [P in keyof T]: DeepMutable<T[P]> };

const caseDeep1: DeepMutable<typeof deepArrA> = [1, [2, 3, [4]]]; // Result: [1, [2, 3, [4]]]
const caseDeep2: DeepMutable<typeof deepArrB> = [1, [2, [3, [4]]]]; // Result: [1, [2, [3, [4]]]]
const caseDeep3: DeepMutable<typeof deepArrC> = [
	{ name: "Tuong", age: 18, id: 1 },
	{ name: "Tuong1", age: 11, id: 2 },
	{ name: "Tuong2", age: 2, id: 3 },
];
caseDeep3[0].age = 18;
caseDeep3[0].name = "Tuong";
