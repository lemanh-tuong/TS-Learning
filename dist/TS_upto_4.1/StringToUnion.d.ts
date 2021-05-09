export declare type StringToUnion<T extends string> = T extends `${infer Character}${infer Rest}` ? Character | StringToUnion<Rest> : never;
