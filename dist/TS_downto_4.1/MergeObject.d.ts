export declare type MergeObject<A extends object, B extends object> = Omit<A, keyof B> & B;
