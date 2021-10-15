export const arithmeticSum = (a, r, n) =>
  new Array(n)
    .fill(null)
    .reduce((accum, current, i) => (accum += new Array(i).fill(null).reduce((accum) => acc + r, a)), 0);