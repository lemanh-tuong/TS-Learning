export type KebabCase<T> = T extends `${infer Character}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Uncapitalize<Character>}${KebabCase<Rest>}`
    : `${Uncapitalize<Character>}-${KebabCase<Rest>}`
  : T;

// type A = KebabCase<"ABCXyz">; // Result: "a-b-c-xyz"
