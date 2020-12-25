import { CheckElementExistInArray } from './CheckElementExistInArray';
import { Mutable } from './Mutable';

export type UniqueArray<T> =
  T extends readonly [infer X, ...infer Rest]
    ? CheckElementExistInArray<Rest, X> extends true
      ? ['Encountered value with duplicates:', Mutable<X>]
      : readonly [X, ...UniqueArray<Rest>]
  : T
    
const data = [[1, 2], [1, 2], 2, 3, 4] as const;

type Case1 = UniqueArray<typeof data>