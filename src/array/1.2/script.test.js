import { maxTripletSum } from './script';

test('Сумма трех максимальных значений массива', () => {
  expect(maxTripletSum([-7,12,-7,29,-5,0,-7,0,0,29])).toBe(41);
  expect(maxTripletSum([3,2,6,8,2,3])).toBe(17);
});