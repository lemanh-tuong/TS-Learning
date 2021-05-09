declare type SubKeys<T, K extends string> = K extends keyof T ? `${K}.${PathKeys<T[K]>}` : never;
export declare type PathKeys<T> = object extends T ? string : T extends readonly any[] ? Extract<keyof T, `${number}`> | SubKeys<T, Extract<keyof T, `${number}`>> : T extends object ? Extract<keyof T, string> | SubKeys<T, Extract<keyof T, string>> : never;
export declare type PathKeyOfObject<T, Key extends keyof T = keyof T> = Key extends string ? T[Key] extends Record<string, any> ? `${Key}.${PathKeyOfObject<T[Key], Exclude<keyof T[Key], keyof Array<any>>> & string}` | `${Key}.${Exclude<keyof T[Key], keyof Array<any>> & string}` | Key : Key : never;
export {};
