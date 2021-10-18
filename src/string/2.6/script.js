export const replaceWithAlphPositions = (str) =>
  str
  .toLowerCase()
  .match(/[a-z]/g)
  .map(item => item.charCodeAt(0) - 96)
  .join(' ');

  
