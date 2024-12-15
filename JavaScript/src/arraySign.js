/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = function (nums) {
    let answer = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            return 0
        } else if (nums[i] < 0) {
            answer = -answer;
        }
    }

    return answer;
};

console.log(arraySign([1, 5, 0, 2, -3]))