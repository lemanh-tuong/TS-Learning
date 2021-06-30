export type HasTail<T extends any[]> = T extends [] | [any] ? false : true;

// type Case1 = HasTail<[]>; // Result: false
// type Case2 = HasTail<[1]>; // Result: false
// type Case3 = HasTail<[1, 2, 3]>; // Result: true
