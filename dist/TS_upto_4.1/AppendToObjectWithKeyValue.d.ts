export declare type AppendToObjectWithKeyValue<T, Key extends string, Value> = {
    [key in keyof T | Key]: key extends keyof T ? T[key] : Value;
};
