/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
    return nums.indexOf(Math.max(...nums))
};