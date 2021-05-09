export declare type FunctionDetail<F extends Function> = F extends (...args: infer Params) => infer ReturnType ? [Params, ReturnType] : never;
