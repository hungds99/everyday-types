// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }
    >
  >
];

type error = TupleToObject<[[1, 2], {}]>;

// ============= Your Code Here =============
type TupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key;
};

// For example
const ProductStatus: readonly string[] = ['unsubmit', 'submitting', 'private', 'public'];

type ProductStatusEnum = TupleToObject<typeof ProductStatus>;

const result: ProductStatusEnum = {
  unsubmit: 'unsubmit',
  submitting: 'submitting',
  private: 'private',
  public: 'public',
};
