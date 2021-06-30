export type DeepPartial<T> = T extends any[]
	? DeepPartialArray<T[number]>
	: T extends object
	? DeepPartialObject<T>
	: T;

interface DeepPartialArray<T> extends Array<DeepPartial<T>> {}
type DeepPartialObject<T> = {
	[P in keyof T]+?: DeepPartial<T[P]>;
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
		key12: {},
	},
} as const;

const arr = [1, 2, 3, 4, 5] as const;

type Case1 = DeepPartial<typeof obj>;
type Case2 = DeepPartial<typeof arr>;

const a: Case1 = {
	key1: {
		key11: {},
	},
};

const b: Case2 = [1, 2];
