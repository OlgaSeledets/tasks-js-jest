import { arithmeticSum } from './script';

test('Арифметическая последовательность', () => {
  expect(arithmeticSum(2, 3, 5)).toBe(40);
});