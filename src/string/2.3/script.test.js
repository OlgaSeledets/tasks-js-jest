import { alphabetized } from './script';

test('Заменить пробелы на заданный разделитель', () => {
  expect(alphabetized('The Holy Bible.')).toBe('BbeehHilloTy');
  expect(alphabetized('Hello!!!!!!!!!!!!!!!!!!!!!!')).toBe('eHllo');
});