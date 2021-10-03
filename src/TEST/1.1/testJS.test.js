import { testJS } from './testJS';

test('test jest', () => {
  expect(testJS('testName')).toBe('testName');
});
