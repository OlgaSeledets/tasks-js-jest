String.prototype.customUpperCase = function () {
  return this.toUpperCase();
};

test('Расширение String', () => {
  expect('abc'.customUpperCase()).toBe('ABC');
  expect('Hello, world!'.customUpperCase()).toBe('HELLO, WORLD!');
});