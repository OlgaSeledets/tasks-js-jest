export const zipWith = (func, arr1, arr2) => {
  if (arr1.length <= arr2.length) {
    return arr1.map((item, i) => func(arr1[i], arr2[i]));
  } else {
    return arr2.map((item, i) => func(arr2[i], arr1[i]));
  }
};
