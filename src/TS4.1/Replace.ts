export type Replace<
  Source extends string,
  SearchValue extends string,
  NewValue extends string
> = SearchValue extends ""
  ? Source
  : Source extends `${infer Head}${SearchValue}${infer Tail}`
  ? `${Head}${NewValue}${Tail}`
  : Source;
