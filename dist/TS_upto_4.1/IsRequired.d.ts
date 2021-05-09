export declare type IsRequired<T, K extends keyof T> = Pick<T, K> extends Record<K, T[K]> ? true : false;
