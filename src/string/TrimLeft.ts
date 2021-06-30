export type TrimLeft<V extends string> = V extends ` ${infer R}`
  ? TrimLeft<R>
  : V;

// type Case1 = TrimLeft<'      Space in left will be removed'>; // 'Space in left will be removed'
