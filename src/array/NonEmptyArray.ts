export type NonEmptyArray<T> = [T, ...T[]];

// const case1: NonEmptyArray<number> = [1, 2];
// const case2: NonEmptyArray<number> = [1];
// const case3: NonEmptyArray<number> = []; // error!
