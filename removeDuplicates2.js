/**
 * @param {number[]} nums
 * @return {number}
 */
// const removeDuplicates = function (nums) {
//     const uniq = [...new Set(nums)];

// };

function removeDuplicates(nums) {
    let i = 0;
    for (let n of nums) {
        console.log(nums);
        if (i < 2 || n > nums[i - 2]) {
            nums[i] = n;
            i++;
        }
    }
    return i;
}   

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));