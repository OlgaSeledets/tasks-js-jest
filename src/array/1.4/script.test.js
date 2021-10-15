import { pattern } from './script';

test('Комбинация сдвига', () => {
  expect(pattern(3)).toBe('123\n231\n312');
  expect(pattern(5)).toBe('12345\n23451\n34512\n45123\n51234');
});