type DeepArrayToUnion<T extends any[]> = {
  [K in keyof T]: T[K] extends any[] ? DeepArrayToUnion<T[K]> : T[K];
}[number]

type A = DeepArrayToUnion<[1, 2, [3, 4], ['a'], ['b', 'c'], [['d']], [[[['e']]]]]>

type B = DeepArrayToUnion<[1, 2, [3, 4]]>;