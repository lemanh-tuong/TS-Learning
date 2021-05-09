import { UnionToIntersection } from "./UnionToIntersection";
declare type NonObjectKeysOf<T> = {
    [K in keyof T]: T[K] extends Array<any> ? K : T[K] extends object ? never : K;
}[keyof T];
declare type ValuesOf<T> = T[keyof T];
declare type ObjectValuesOf<T extends Object> = Exclude<Exclude<Extract<ValuesOf<T>, object>, never>, Array<any>>;
export declare type DeepFlatten<T> = T extends any ? Pick<T, NonObjectKeysOf<T>> & UnionToIntersection<DeepFlatten8<ObjectValuesOf<T>>> : never;
declare type DeepFlatten8<T> = T extends any ? Pick<T, NonObjectKeysOf<T>> & UnionToIntersection<DeepFlatten7<ObjectValuesOf<T>>> : never;
declare type DeepFlatten7<T> = T extends any ? Pick<T, NonObjectKeysOf<T>> & UnionToIntersection<DeepFlatten6<ObjectValuesOf<T>>> : never;
declare type DeepFlatten6<T> = T extends any ? Pick<T, NonObjectKeysOf<T>> & UnionToIntersection<DeepFlatten5<ObjectValuesOf<T>>> : never;
declare type DeepFlatten5<T> = T extends any ? Pick<T, NonObjectKeysOf<T>> & UnionToIntersection<DeepFlatten4<ObjectValuesOf<T>>> : never;
declare type DeepFlatten4<T> = T extends any ? Pick<T, NonObjectKeysOf<T>> & UnionToIntersection<DeepFlatten3<ObjectValuesOf<T>>> : never;
declare type DeepFlatten3<T> = T extends any ? Pick<T, NonObjectKeysOf<T>> & UnionToIntersection<DeepFlatten2<ObjectValuesOf<T>>> : never;
declare type DeepFlatten2<T> = T extends any ? Pick<T, NonObjectKeysOf<T>> & UnionToIntersection<DeepFlatten1<ObjectValuesOf<T>>> : never;
declare type DeepFlatten1<T> = T extends any ? Pick<T, NonObjectKeysOf<T>> : UnionToIntersection<ObjectValuesOf<T>>;
export {};
