// Lấy type của params và type return của Function
export type FunctionDetail<F extends Function> = F extends (
  ...args: infer Params
) => infer ReturnType
  ? [Params, ReturnType]
  : never;
// export type FunctionDetail<F extends Function> =
// F extends (...args: infer A) => infer R ? { params: A, returnType: R } : never;

// type Case1 = FunctionDetail<(a: number, b: any) => true>; // Result: [[a: number, b: any], true]
