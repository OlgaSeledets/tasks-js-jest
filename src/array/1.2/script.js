export const maxTripletSum = (array) => {
    const NewArray = array.reduce((newArr, item) => {
        return newArr.includes(item) ? newArr : [...newArr, item];
    }, []);
    const ThreeMax = NewArray.sort((a, b) => b-a).slice(0, 3);
    const Sum = ThreeMax.reduce((sum, item) => sum + item);
    return Sum;
}
