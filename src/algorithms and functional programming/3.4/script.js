export const uniqueSum = (arr) => [...new Set(arr)].reduce((acc, item) => acc + item, 0);
  
