import { uniqueSum } from './script';

test('Сумма уникальных значений', () => {
  expect(uniqueSum([1, 2, 3])).toBe(6);
  expect(uniqueSum([-1, -1, 5, 2, -7])).toBe(-1);
});