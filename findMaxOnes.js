/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
    let ones = 0;
    let arr = [];
    nums.forEach((item, index) => {
        if (item === 1) {
            ones++;
        } else if (item === 0) {
            arr.push(ones);
            ones = 0;
        }
        if (index === nums.length - 1) {
            arr.push(ones)
        }
    })

    return Math.max(...arr);
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));