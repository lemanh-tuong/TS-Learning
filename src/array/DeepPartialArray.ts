export type DeepPartialArray<T> = T extends any[]
	? _DeepPartialArray<T[number]>
	: T extends object
	? _DeepPartialObject<T>
	: T;

interface _DeepPartialArray<T> extends Array<DeepPartialArray<T>> {}
type _DeepPartialObject<T> = {
	[P in keyof T]+?: DeepPartialArray<T[P]>;
};

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
		key12: "abc",
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
