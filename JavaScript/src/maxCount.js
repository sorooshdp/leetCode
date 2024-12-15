/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumCount = function (nums) {
    let positiveCount = 0, negativeCoutn = 0;
    nums.forEach(item => {
        item > 0 ? positiveCount++ : 0
        item < 0 ? negativeCoutn++ : 0
    })

    return Math.max(positiveCount, negativeCoutn)
};

