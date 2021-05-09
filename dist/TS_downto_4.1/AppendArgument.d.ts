export declare type AppendArgument<Fn, ArgType> = Fn extends (...args: infer T) => infer R ? (...args: [...T, ArgType]) => R : never;
