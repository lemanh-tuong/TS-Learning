// https://github.com/microsoft/TypeScript/pull/40336
// export type Split<S extends string, D extends string> =
//     string extends S ? string[] :
//     S extends '' ? [] :
//     S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] :
//     [S];
// Ts 4.1