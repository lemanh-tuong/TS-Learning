// Convert Type Array to Union
export type ArrayToUnion<T> = T extends (infer U)[] ? U : never;

// export type ArrayToUnion<T extends any[]> = T[number];

// type Case1 = ArrayToUnion<[0, 'data', 1, 'data']>; // Result: 0 | "data" | 1
