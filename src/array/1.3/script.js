export const biggest = (nums) => {
    nums.sort((x, y) => '' + y + x - ('' + x + y));
    return nums.join('');
}
