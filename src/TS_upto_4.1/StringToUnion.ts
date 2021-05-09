export type StringToUnion<
  T extends string
> = T extends `${infer Character}${infer Rest}`
  ? Character | StringToUnion<Rest>
  : never;
const str = `Lorem Ipsum is simply`;
type Case1 = StringToUnion<typeof str>; // Result: "L" | "o" | "r" | "e" | "m" | " " | "I" | "p" | "s" | "u" | "i" | "l" | "y"
