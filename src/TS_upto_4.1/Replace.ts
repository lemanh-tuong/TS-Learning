export type Replace<
  Source extends string,
  SearchValue extends string,
  NewValue extends string
> = SearchValue extends ""
  ? Source
  : Source extends `${infer Head}${SearchValue}${infer Tail}`
  ? `${Head}${NewValue}${Tail}`
  : Source;

const str = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, `;

// type Case1 = Replace<typeof str, "Lorem Ipsum", "abc">; // Result: "abc is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
