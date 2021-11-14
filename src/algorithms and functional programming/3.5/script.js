export const reduce = function(arr, callback, initialValue){
    let accumulator = initialValue;
    let index = 0;
    if (initialValue === undefined) {
        accumulator = arr[0];
        index = 1;
    }
    for (; index < arr.length; index++) {
        accumulator = callback(accumulator, arr[index], index, arr);
    }
    return accumulator;              
}
 

  
