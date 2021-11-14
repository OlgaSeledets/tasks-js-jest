import { addThree } from './script';

test('Функциональное сложение', () => {
  expect(addThree(3)).toBe(6);
});