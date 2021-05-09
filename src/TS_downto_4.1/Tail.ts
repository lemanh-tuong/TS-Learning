// Bỏ phần tử đầu tiên
// export type Tail<T extends any[]> = ((...t: T) => any) extends ((_: any, ...args: infer TT) => any) ? TT : never;
export type Tail<T> = T extends [infer _I, ...infer Rest] ? Rest : never;

// type Case1 = Tail<[1, 2, 3, 4, 5]>; // Result: [2, 3, 4, 5]
// type Case2 = Tail<['name', 'age', 'address']>; // Result: ["age", "address"]
