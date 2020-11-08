type DeepFlat<T extends any[]> = {
  [K in keyof T]: T[K] extends any[] ? DeepFlat<T[K]> : T[K];
}[number]

type A = DeepFlat<[1, 2, [3, 4], ['a'], ['b', 'c'], [['d']], [[[['e']]]]]>

type B = DeepFlat<[1, 2, [3, 4]]>;