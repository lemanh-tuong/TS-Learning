import { PathKeyOfObject } from './PathKeyOfObject';
export declare type PathValue<T, P extends PathKeyOfObject<T>> = P extends `${infer Key}.${infer Rest}` ? Key extends keyof T ? Rest extends PathKeyOfObject<T[Key]> ? PathValue<T[Key], Rest> : never : never : P extends keyof T ? T[P] : never;
