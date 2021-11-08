import { romanToNumber } from './script';

test('Декодирование римских цифр', () => {
  expect(romanToNumber('I')).toBe(1);
  expect(romanToNumber('C')).toBe(100);
  expect(romanToNumber('CI')).toBe(101);
  expect(romanToNumber('XXI')).toBe(21);
  expect(romanToNumber('IV')).toBe(4);
  expect(romanToNumber('MDL')).toBe(1550);
  expect(romanToNumber('DCCCLXXXVI')).toBe(886);
});