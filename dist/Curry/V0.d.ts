import { HasTail } from "../TS_downto_4.1/HasTail";
import { Head } from "../TS_downto_4.1/Head";
import { Tail } from "../TS_downto_4.1/Tail";
export declare type V0<Parameters extends any[], ReturnType> = (arg0: Head<Parameters>) => HasTail<Parameters> extends true ? V0<Tail<Parameters>, ReturnType> : ReturnType;
