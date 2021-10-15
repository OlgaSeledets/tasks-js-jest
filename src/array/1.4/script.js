export const pattern = (n) =>
  new Array(n)
    .fill(null)
    .reduce((accum, current, i) => {
      accum[i] = i + 1;
      return accum;
    }, [])
    .reduce((accum, current, i, arr) => {
      accum.push(arr.slice(i, arr.length).join('') + arr.slice(0, i).join(''));
      return accum;
    }, [])
    .join('\n');