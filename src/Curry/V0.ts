import { HasTail, Head, Tail } from "../array";

export type V0<Parameters extends any[], ReturnType> = (
	arg0: Head<Parameters>
) => HasTail<Parameters> extends true
	? V0<Tail<Parameters>, ReturnType>
	: ReturnType;

function carryToCurryV0<Parameters extends any[], ReturnType>(
	func: (...args: Parameters) => ReturnType
): V0<Parameters, ReturnType> {
	return (...args: any[]): any =>
		args.length >= func.length
			? func(...(args as any))
			: carryToCurryV0((func as any).bind(undefined, ...args));
}

const myFunc = (name: string, age: number, single: boolean) => true;

const curryResult = carryToCurryV0(myFunc);

const test23 = curryResult("name")(1)(false);
