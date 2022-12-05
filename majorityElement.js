/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    const majority = Math.floor(nums.length / 2);
    let frequency = {};

    for (let i = 0; i < nums.length; i++) {
        if (frequency[nums[i]] === undefined) {
            frequency[nums[i]] = 1;
        } else {
            frequency[nums[i]]++;
        }
        if(frequency[nums[i]] > majority)
        {
            return nums[i];
        }

    }

};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))