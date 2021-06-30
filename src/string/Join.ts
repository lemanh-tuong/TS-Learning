// https://github.com/microsoft/TypeScript/pull/40336
export type Join<T extends unknown[], D extends string> = T extends []
  ? ""
  : T extends [string | number | boolean | bigint]
  ? `${T[0]}`
  : T extends [string | number | boolean | bigint, ...infer U]
  ? `${T[0]}${D}${Join<U, D>}`
  : string;
// type T30 = Join<[1, 2, 3, 4], '.'>;  // '1.2.3.4'
// type T31 = Join<['foo', 'bar', 'baz'], '-'>;  // 'foo-bar-baz'
// type T32 = Join<[], '.'>;  // ''
