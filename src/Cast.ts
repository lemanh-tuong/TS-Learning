// It requires TS to re - check a type X against a type Y, and type Y will only be enforced if it fails.
// This way, we’re able to stop TS’s complaints:
export type Cast<X, Y> = X extends Y ? X : Y;