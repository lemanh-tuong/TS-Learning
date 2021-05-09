import { UnionToIntersection } from "./UnionToIntersection";
export declare type LastOfUnion<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer R ? R : never;
