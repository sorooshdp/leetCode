/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = function (nums, k) {
    if (!nums.length || k < 0) return 0;

    let answer = 0;
    let pairs = [];
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 < nums.length)
            for (let j = i + 1; j < nums.length; j++) {
                if (Math.abs(nums[i] - nums[j]) === k && !pairs.includes(`${nums[i]},${nums[j]}`)) {
                    pairs.push(`${nums[i]},${nums[j]}`,`${nums[j]},${nums[i]}`)
                    answer++
                }
            }
    }
    return answer
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = function (nums, k) {
    if (!nums.length || k < 0) return 0;

    const map = {};
    let counter = 0;

    nums.forEach(n => {
        map[n] = (map[n] || 0) + 1
    });

    Object.keys(map).forEach(key => {
        if (k === 0) {
            if (map[key] > 1) counter++;
        } else if (map[parseInt(key) + k]) {
            counter++;
        }
    });
    return counter;
};
let object = {"0": 5}
console.log((object[0] || 0) + 1)
// console.log(findPairs([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3))