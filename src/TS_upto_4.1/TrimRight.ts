export type TrimRight<V extends string> = V extends `${infer R} `
  ? TrimRight<R>
  : V;

// type Case = TrimRight<'Space at right will be removed           '>; // 'Space at right will be removed
