// Lấy Type phần tử đầu tiên trong mảng
// export type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;
export type Head<T> = T extends [infer I, ...infer _Rest] ? I : never;

// type Case1 = Head<[1, 2, string, boolean]>; // Result: 1
// type Case2 = Head<Parameters<(name: string, age: number) => void>>; // Result: string
