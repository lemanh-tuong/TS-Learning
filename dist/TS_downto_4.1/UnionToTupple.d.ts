import { UnionToIntersection } from "./UnionToIntersection";
export declare type UnionToTuple<T> = UnionToIntersection<T extends any ? (t: T) => T : never> extends (_: any) => infer W ? [...UnionToTuple<Exclude<T, W>>, W] : [];
