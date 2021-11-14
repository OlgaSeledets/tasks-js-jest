export const reduce = function(arr, callback, initialValue){                              // Step 1
    if (!arr.length && initialValue === undefined)
        throw new TypeError('Массив пустой. Невозможно к нему применить данный метод');
    // Если дефолтное значение задано, то присваиваем его к accumulator, который в итоге будем возвращать
    let accumulator = initialValue;
    let index = 0;
    if (initialValue === undefined) {
        // Если нет дефолтного значения, тогда accumulator будет присваиваться значение первого элемента массива
        accumulator = arr[0];
        index = 1;
    }
    
    // В цикле проходимся по нашему массиву и передаем наш callback, который нужно выполнить для каждого элемента массива
    for (; index < arr.length; index++) {
        // Как мы помним метод reduce принимает 4 параметра (см начало поста)
        // Поэтому мы в наш callback передаем такие же 4 параметра
        accumulator = callback(accumulator, arr[index], index, arr);
    }
    return accumulator;              
}
 

  
