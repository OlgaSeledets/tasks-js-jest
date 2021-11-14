import { multiplyAll } from './script';

test('Умножение всех элементов массива', () => {
  expect(multiplyAll([1, 2, 3])(2)).toStrictEqual([2, 4, 6]);
});