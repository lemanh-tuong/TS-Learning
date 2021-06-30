// https://www.typescriptlang.org/play?ts=4.1.2#code/C4TwDgpgBACghsAFgaQiAzgHgCoD4oC8AUFKVAPYBGAVhAMbBQQAewEAdgCbpTZQD8UdMABOAS3YBzKAC4SZPizZceIiHE7l2AGxBQ47EAG0AugKgBRViLgNMAazTkAZrwA0UAAYASAN7sAVwBbSggRAF9PfAAfKABlAMpUDBwPK1FbYAcnV2wPH39g0Iio-DkyXiZWDm4KGnpGQXSbO0cQF3chUQlJGPjE5Kw8y2tM7Pbcj2FxKVwy+VJ2CAA3MIBuIk3QSH6ktCGPZCrlWume-AIoI6UanjaOvkEC5HCAOj94JEGcI2QTXEisigS1WIg2W3A0AAgoRYAgUPtML42MIZFBfHA0QByLEeSho3x0NEARg8nAJKOAACY0aIAhBwozwrggA
type SubKeys<T, K extends string> = K extends keyof T
	? `${K}.${PathKeys<T[K]>}`
	: never;

export type PathKeys<T> = object extends T
	? string
	: T extends readonly any[]
	? Extract<keyof T, `${number}`> | SubKeys<T, Extract<keyof T, `${number}`>>
	: T extends object
	? Extract<keyof T, string> | SubKeys<T, Extract<keyof T, string>>
	: never;
// ----------------------------------------------------------------------------------------------------------
export type PathKeyOfObject<
	T,
	Key extends keyof T = keyof T
> = Key extends string
	? T[Key] extends Record<string, any>
		?
				| `${Key}.${PathKeyOfObject<
						T[Key],
						Exclude<keyof T[Key], keyof Array<any>>
				  > &
						string}`
				| `${Key}.${Exclude<keyof T[Key], keyof Array<any>> & string}`
				| Key
		: Key
	: never;

const object = {
	test: {
		a: "",
		b: {
			c: 1,
			d: {
				test2: true,
			},
		},
	},
	test2: {
		a1: {
			a2: 1,
		},
	},
};

type A = PathKeys<typeof object>;
