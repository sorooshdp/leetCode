/**
 * @param {number[]} nums
 * @return {number}
 */
const countElements = function (nums) {
    // nums.sort((a, b) => a - b);
    // let count = 0;

    // for (let i = 1; i < nums.length - 1; i++) {
    //     if (nums.some(num => num > nums[i]) && nums.some(num => num < nums[i]))
    //         count++
    // }

    // return count
    let count = 0;
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > min && nums[i] < max)
            count++
    }

    return count
};

console.log(countElements([11, 7, 2, 15]));