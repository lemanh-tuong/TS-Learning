export type MergeObject<A extends object, B extends object> = Omit<A, keyof B> & B; 

type X  = {
    a: 1
    b: number
}
type Y = {
    a: 2
    b: string
    c: boolean
}
// XY is never, as field 'a' evaluates as 1 & 2 which is never
type XY = MergeObject<X, Y> // Result: {a: 2, b: string, c: boolean}