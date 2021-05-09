import { CheckElementExistInArray } from "./CheckElementExistInArray";
import { Mutable } from "./Mutable";
export declare type UniqueArray<T> = T extends readonly [infer X, ...infer Rest] ? CheckElementExistInArray<Rest, X> extends true ? ["Encountered value with duplicates:", Mutable<X>] : readonly [X, ...UniqueArray<Rest>] : T;
