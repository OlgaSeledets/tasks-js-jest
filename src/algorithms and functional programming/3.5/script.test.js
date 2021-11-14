import { reduce } from './script';

test('Сумма уникальных значений', () => {
  expect(reduce([1, 2, 3, 4], (acc, value) => acc * value, 1)).toBe(24);
});