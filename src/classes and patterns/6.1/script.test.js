import { Singleton } from './script';

const singleton = () => {
  const obj1 = new Singleton();
  const obj2 = new Singleton();

  obj1.name = 'Singleton';
  return obj2.name;
};

test('Singleton', () => {
  expect(singleton()).toBe('Singleton');
});