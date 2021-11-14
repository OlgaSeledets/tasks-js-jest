export const flattenAndSort = (arr) =>
  arr.reduce((a, b) => { 
    return a.concat(b).sort();
  });
  

  
