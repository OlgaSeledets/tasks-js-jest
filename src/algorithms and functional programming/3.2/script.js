function add(a) {
  return function (b) {
    return a + b;
  }
}

export const addThree = add(3);
  

  
