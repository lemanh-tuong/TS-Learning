export declare type FlatArray<A extends unknown[]> = ReturnType<A extends [infer U, ...infer V] ? U extends unknown[] ? () => [...U, ...FlatArray<V>] : () => [U, ...FlatArray<V>] : () => A>;
