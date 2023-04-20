/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
    return nums.map(item => item ** 2).sort((a, b) => a - b)
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));