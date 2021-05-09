// https://github.com/microsoft/TypeScript/pull/40336
export type PropType<T, Path extends string> = string extends Path
  ? unknown
  : Path extends keyof T
  ? T[Path]
  : Path extends `${infer K}.${infer R}`
  ? K extends keyof T
    ? PropType<T[K], R>
    : unknown
  : unknown;

declare function getPropValue<T, P extends string>(
  obj: T,
  path: P
): PropType<T, P>;
declare const s: string;

const obj = { a: { b: { c: 42, d: "hello" } } };
getPropValue(obj, "a"); // { b: {c: number, d: string } }
getPropValue(obj, "a.b"); // {c: number, d: string }
getPropValue(obj, "a.b.d"); // string
getPropValue(obj, "a.b.x"); // unknown
getPropValue(obj, s); // unknown

// Ts 4.1
