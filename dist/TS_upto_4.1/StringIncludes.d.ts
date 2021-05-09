export declare type StringIncludes<T extends string, U extends string> = T extends `${U}${any}` ? true : false;
