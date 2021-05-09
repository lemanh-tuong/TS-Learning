// Thêm 1 phần tử vào đầu mảng
export type Unshift<T extends any[], E> = ((
  head: E,
  ...args: T
) => any) extends (...args: infer U) => any
  ? U
  : T;

// type Case1 = Unshift<[1, 2, 3], 4>; // Result:  [4, 1, 2, 3]
// type Case2 = Unshift<[number, boolean], string>; // Result: [string, number, boolean]
