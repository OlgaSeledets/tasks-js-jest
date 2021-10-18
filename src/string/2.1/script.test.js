import { toMachineName } from './script';

test('Машиночитаемые имена', () => {
  expect(toMachineName('Hello, my name is Andrew', '-')).toBe('hello-my-name-is-andrew');
  expect(toMachineName('Lorem ipsum sit DOLOR', '-')).toBe(
    'lorem-ipsum-sit-dolor'
  );
  expect(toMachineName('3 basics and 1 advance', '-')).toBe('basics-and-1-advance');
});