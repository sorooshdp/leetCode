/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countPairs = function (nums, k) {
    if (!nums.length || k <= 0) return 0;

    let counter = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && ((i * j) % k) === 0)
                counter++
        }
    }

    return counter;
};

console.log(countPairs([5,5,9,2,5,5,9,2,2,5,5,6,2,2,5,2,5,4,3],7))