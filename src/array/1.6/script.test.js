import { diagonalSum } from './script';

test('Диагональная сумма матрицы', () => {
  expect(
    diagonalSum([
      [1, 2],
      [3, 4],
    ])
  ).toBe(5);
});