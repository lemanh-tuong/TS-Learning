// TS4.1
// https://github.com/microsoft/TypeScript/issues/13298
// import { UnionToIntersection } from './UnionToIntersection';

// export type UnionToTuple<T> = UnionToIntersection<(T extends any ? (t: T) => T : never)> extends (_: any) => infer W
//   ? [...UnionToTuple<Exclude<T, W>>, W]
//   : [];