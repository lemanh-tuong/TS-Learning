type _Recurse<T> =
    T extends { __rec: never } ? never
  : T extends { __rec: { __rec: infer U } } ? { __rec: _Recurse<U> }
  : T extends { __rec: infer U } ? U
  : T;

export type Recurse<T> =
  T extends { __rec: unknown }
    ? Recurse<_Recurse<T>>
    : T;

type Repeat<T, N extends number> = Recurse<_Repeat<T, N, []>>;
type _Repeat<T, N extends number, A extends T[]> =
  A["length"] extends N
    ? A
    : { __rec: _Repeat<T, N, [T, ...A]> };

// XS = ["x", ..., "x"] and XS["length"] = 100
type XS = Repeat<"x", 100>;

//https://dev.to/susisu/how-to-create-deep-recursive-types-5fgg#:~:text=As%20of%20TypeScript%204.1%2C%20the,think%20this%20is%20too%20strict