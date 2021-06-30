export type ExtractRouteParams<
  T extends string
> = T extends `${infer Pathname}:${infer Param}/${infer Rest}`
  ? { [k in Param | keyof ExtractRouteParams<Rest>]: string }
  : T extends `${infer Pathname}:${infer Param}`
  ? { [k in Param]: string }
  : {};

declare function handleGet<Route extends string>(
  route: Route,
  handler: (params: ExtractRouteParams<Route>) => void
): void;

handleGet("/posts/:postId", (params) => {
  const { postId } = params; // type is string
  console.log(postId);
});

handleGet(
  "/posts/:postId/:commentId/:test/:test2/:test3",
  ({ commentId, postId }) => {
    console.log(postId, commentId);
  }
);

const route = "/user/:userId";

handleGet(route, ({ userId }) => {});
