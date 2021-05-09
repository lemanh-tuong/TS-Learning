import { TrimLeft } from "./TrimLeft";
import { TrimRight } from "./TrimRight";
export declare type Trim<V extends string> = TrimLeft<TrimRight<V>>;
