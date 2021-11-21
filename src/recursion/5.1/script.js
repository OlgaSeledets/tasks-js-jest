export const sequenceSum = function(begin, end, step){
  var sum = 0;
  for (let i = begin; i <= end; i += step){
    sum += i; 
  } return sum;
};
