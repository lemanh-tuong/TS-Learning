// https://www.typescriptlang.org/play?ts=4.1.0-pr-40336-88#code/C4TwDgpgBACghsAFgHgCoBooGkIihAD2AgDsATAZygGtcB7AMylSgF4b6nUA+NgKChQAFDjyFi5KhWAAnAJYkA5gKgB+ZgG1RAXXxFSlKACUIAYzoyyyafKWY4JENxWD1AHygADACQBvUQC+AHR+8EhoWrjamACiBKYANgCuZBDItCCMmjqYGVkAgjIycCDIDk7cvABkUDYKigGeLoJQHj7+uMF+cYkpaXlckSDRHJlMhcWl5ZVQNXVKjc2CHqLNAFzYuCobJBAAbhAyAJR8fKCQsAiIAGpwyWkYsHoShmEoPLysKjDPBlTtCgYh02IC6vkBwJM0kWrhBv0koyyqGa6ihwHhryuER0zhaLXUb1u92xUUwaNxeKgO32h3WUF2Bxk2ye4j+iK4KM0MG0dIZhwA3KdUok4DJoAwkiRTMA5HQSFBFBBgGhMD9WQi3mhKkI6AAjABWG0eYCuGxgRzNVyJSQequ4gr45hI0igSQowPYvhUYBkdH1ZmAFA2GmavnpcAAthANgAiADCdDoCSgPr9AYAhDHME7ZHJdUlgBYg1AAIwABigAXQofDUdj+QjcAAXvUU77-dLM9m5bn84WZMWSwAmSvVwQ8gJQOBUJ3SB2z9F7NgKpVCN2HTAAclTHcDQTLQRIkYgm6OgqAA
import { PathKeyOfObject } from './PathKeyOfObject';
export type PathValue<T, P extends PathKeyOfObject<T>> =
  P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? Rest extends PathKeyOfObject<T[Key]>
      ? PathValue<T[Key], Rest>
      : never
    : never
  : P extends keyof T
    ? T[P]
    : never;

const user = {
  projects: [
    { name: "Cool project!", contributors: 10 },
    { name: "Amazing project!", contributors: 12 },
  ]
} as const;

declare function get<T, P extends PathKeyOfObject<T>>(obj: T, path: P): PathValue<T, P>;

const v = get(user, 'projects.0.name');