// https://github.com/krzkaczor/ts-essentials

// type DeepPartial<T> = {
// 	[P in keyof T]?: T[P] extends Array<infer U>
// 		? Array<DeepPartial<U>>
// 		: T[P] extends ReadonlyArray<infer U>
// 		? ReadonlyArray<DeepPartial<U>>
// 		: DeepPartial<T[P]>;
// };
export type DeepPartialArray<T> = T extends Function
	? T
	: T extends object
	? { [P in keyof T]?: DeepPartialArray<T[P]> }
	: T;

const obj = {
	key1: {
		key11: {
			key111: {
				key1111: "a",
				key1112: {
					key11121: {
						key11122: 1,
					},
				},
			},
		},
		key12: {},
	},
} as const;

const arr = [1, 2, 3, 4, 5] as const;

type Case1 = DeepPartialArray<typeof obj>;
type Case2 = DeepPartialArray<typeof arr>;

const a: Case1 = {
	key1: {
		key11: {},
	},
};

const b: Case2 = [1, 2];
