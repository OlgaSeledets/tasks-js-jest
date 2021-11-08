export const romanToNumber = (number) => {
  const Roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return number
    .split('')
    .map((item) => Roman[item])
    .reduce((accum, current, i) => {
      if (i === 0) accum += current;
      else if (current <= accum) accum += current;
      else accum = current - accum;
      return accum;
    }, 0);
};

  
