import { TrimLeft } from "./TrimLeft";
import { TrimRight } from "./TrimRight";

export type Trim<V extends string> = TrimLeft<TrimRight<V>>;

// type Case = Trim<'     unnecessary space will be removed         '>; // 'unnecessary space will be removed'
