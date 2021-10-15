export const sumAverage = (array) => {
    let result = 0;
    array.map(item => {
        result += (item.reduce((sum, elem) => sum + elem) / item.length);
    });
    return Math.floor(result);
}
