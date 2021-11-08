export const countDuplicates = (text) =>
  text
    .toLowerCase()
    .split('')
    .reduce((acc, item, i, arr) => {
      if(arr.indexOf(item) !== i && acc.indexOf(item) < 0) acc.push(item);
      return acc;
    }, [])
    .length;
  

  
