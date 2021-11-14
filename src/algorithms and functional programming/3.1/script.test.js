import { flattenAndSort } from './script';

test('Сведение и сортировка массива', () => {
  expect(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});