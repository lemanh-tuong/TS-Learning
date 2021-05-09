export declare type FilteredKeys<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];
