// https://dev.to/macsikora/advanced-typescript-exercises-answer-1-59ge

type Transform<A> = A extends Promise<infer Inner> ? Inner : never
type Result = Transform<Promise<string>> // Result is string type