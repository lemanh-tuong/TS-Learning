export type AppendArgument<Fn, ArgType> = Fn extends (
  ...args: infer T
) => infer R
  ? (...args: [...T, ArgType]) => R
  : never;

const a = () => 1;

type Case1 = AppendArgument<typeof a, number>; // Result: (args_0: number) => number
