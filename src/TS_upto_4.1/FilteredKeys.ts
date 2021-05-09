export type FilteredKeys<T, U> = {
  [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];

// type FooItem<T> = T extends number ? { value: T } : undefined;

// type Case1 = FilteredKeys<
//   { test: "test"; test2: 123; test3: boolean },
//   string | number
// >; // Result 'test1' | 'test2';
