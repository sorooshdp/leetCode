/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function (nums) {
    const majority = Math.floor(nums.length / 3);
    let frequency = {};
    let answer = [];

    if(majority < 1)
    {
        return [...new Set(nums)];
    }

    for (let i = 0; i < nums.length; i++) {
        if (frequency[nums[i]] === undefined) {
            frequency[nums[i]] = 1;
        } else {
            frequency[nums[i]]++;
        }
        if (frequency[nums[i]] > majority) {
            answer.push(nums[i]);
        }
    }

    return [...new Set(answer)];
};

console.log(majorityElement([3,3,2,4,5,1,25,35,3333,3,3,3,3,3,3,3]))