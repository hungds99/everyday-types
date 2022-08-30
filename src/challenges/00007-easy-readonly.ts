// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

// ============= Your Code Here =============
type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

type TodoPreview = MyReadonly<MyPick<Todo1, 'title'>>;

// For example
const todo: TodoPreview = {
  title: 'WOW',
};
// Error
// todo.title = '10';
console.log('Todo : ', todo);
