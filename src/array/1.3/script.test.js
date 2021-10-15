import { biggest } from './script';

test('Сортировка к максимальному значению', () => {
  expect(biggest([3, 30, 34, 5, 9])).toBe('9534330');
});