import { spread } from './script';

test('Распаковка аргументов', () => {
  expect(spread((x, y) => x + y, [1, 3])).toBe(4);
  expect(spread((x, y) => x * y, [2, 4])).toBe(8);
  expect(spread((x) => x === '10', ['10'])).toBe(true);
});