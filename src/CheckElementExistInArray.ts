export type CheckElementExistInArray<T, X> =
  T extends readonly [X, ...infer _Rest]
    ? true
    : T extends readonly [X]
      ? true
      : T extends readonly [infer _, ...infer Rest]
        ? CheckElementExistInArray<Rest, X>
        : false
const data = [1, 2, 3, 4, [4, 5, 6] as const] as const;
type Case1 = CheckElementExistInArray<typeof data, 1>; // true;
type Case2 = CheckElementExistInArray<typeof data, 6> // false;
type Case3 = CheckElementExistInArray<typeof data, [4, 5, 6]> // false

