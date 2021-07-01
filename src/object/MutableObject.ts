export type MutableObject<T> = {
	-readonly [K in keyof T]: T[K];
};

const arrA = [1, 2, 3, 4] as const;
const arrB = [1, [2, [3, [4]]]] as const;

const case1: MutableObject<typeof arrA> = [1, 2, 3, 4]; // Result: [1, 2, 3, 4]
const case2: MutableObject<typeof arrB> = [1, [2, [3, [4]]]]; // Result: [1, readonly [2, readonly [3, readonly [4]]]]

const objA = { name: "Tuong", age: 20 } as const;
const objB = {
	name: "Tuong",
	age: 20,
	data: { id: "123", anotherProperty: false },
} as const;

const case3: MutableObject<typeof objA> = { age: 20, name: "Tuong" }; // Result: { age: 20, name: 'Tuong' }
const case4: MutableObject<typeof objB> = {
	age: 20,
	name: "Tuong",
	data: { anotherProperty: false, id: "123" },
}; // Result: { age: 20, name: 'Tuong', data: { readonly id: "123"; readonly anotherProperty: false; }}
// case4.data.anotherProperty = false; // Error anotherProperty it is a read-only
