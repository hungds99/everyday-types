// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

type cases2 = [
  Expect<Equal<First2<[3, 2, 1]>, 3>>,
  Expect<Equal<First2<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First2<[]>, never>>,
  Expect<Equal<First2<[undefined]>, undefined>>
];

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>
];

// ============= Your Code Here =============
type First<T extends any[]> = T[number] extends never ? never : T[0];
type First2<T extends any[]> = T['length'] extends 0 ? never : T[0];

type ProductStatus = ['public', 'submit', 'unsubmit'];

type ProductStatusFirst = First<ProductStatus>;

const publicStatus: ProductStatusFirst = 'public';