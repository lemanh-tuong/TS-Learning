import { IsRequired } from "./IsRequired";

export type GetRequired<T> = {
  [K in keyof T as IsRequired<T, K> extends true ? K : never]: T[K];
};

// type A = GetRequired<{ a: string; b?: number }>; // Result: { a: string }
