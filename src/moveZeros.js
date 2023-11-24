/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let snowBallSize = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            snowBallSize++;
        }
        else if (snowBallSize > 0) {
            let t = nums[i];
            nums[i] = 0;
            nums[i - snowBallSize] = t;
        }
    }
}