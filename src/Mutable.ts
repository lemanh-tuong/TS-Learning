export type Mutable<T> = {
  -readonly [K in keyof T]: T[K]
}

const arrA = [1, 2, 3, 4] as const;
const arrB = [1, [2, [3, [4]]]] as const;

const case1: Mutable<typeof arrA> = [1, 2, 3, 4]; // Result: [1, 2, 3, 4]
const case2: Mutable<typeof arrB> = [1, [2, [3, [4]]]] // Result: [1, readonly [2, readonly [3, readonly [4]]]]


const objA = { name: 'Tuong', age: 20 } as const;
const objB = { name: 'Tuong', age: 20, data: { id: '123', anotherProperty: false } } as const;

const case3: Mutable<typeof objA> = { age: 20, name: 'Tuong' } // Result: { age: 20, name: 'Tuong' }
const case4: Mutable<typeof objB> = { age: 20, name: 'Tuong', data: { anotherProperty: false, id: '123' } }; // Result: { age: 20, name: 'Tuong', data: { readonly id: "123"; readonly anotherProperty: false; }}
// case4.data.anotherProperty = false; // Error anotherProperty it is a read-only



const deepArrA = [1, [2, 3, [4]]] as const;
const deepArrB = [1, [2, [3, [4]]]] as const;

const deepArrC = [
  { name: 'Tuong', age: 18, id: 1 },
  { name: 'Tuong1', age: 11, id: 2 },
  { name: 'Tuong2', age: 2, id: 3}
] as const;

export type DeepMutable<T> = { -readonly [P in keyof T]: DeepMutable<T[P]> }; 

const caseDeep1: DeepMutable<typeof deepArrA> = [1, [2, 3, [4]]]; // Result: [1, [2, 3, [4]]]
const caseDeep2: DeepMutable<typeof deepArrB> = [1, [2, [3, [4]]]] // Result: [1, [2, [3, [4]]]]
const caseDeep3: DeepMutable<typeof deepArrC> = [
  { name: 'Tuong', age: 18, id: 1 },
  { name: 'Tuong1', age: 11, id: 2 },
  { name: 'Tuong2', age: 2, id: 3}
];
caseDeep3[0].age = 18;
caseDeep3[0].name = 'Tuong';