// Convert Type Array to Tupple
export type ArrayToTupple<T> = T extends (infer U)[] ? U : never;

type Case1 = ArrayToTupple<[0, 'data', 1, 'data']>; // Result: 0 | "data" | 1
