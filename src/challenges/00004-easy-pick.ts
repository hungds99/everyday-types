// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

// ============= Your Code Here =============
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

// For example
interface Animal {
  name: string;
  age: number;
}

type Dog = MyPick<Animal, 'name'>;
type Cat = Pick<Animal, 'age'>;

const dog: Dog = {
  name: 'Nick',
};
console.log('View dog: ', dog);

const cat: Cat = {
  age: 10,
};
console.log('View cat: ', cat);
