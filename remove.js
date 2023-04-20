/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// const removeElement = function (nums, val) {
//      let deletedItems = 0
//     for (let index = 0; index < nums.length; index++) {
//         if (nums[index] === val) {
//             nums.splice(index, 1);
//             index--
//             deletedItems++
//         }
//     }

//     console.log(nums);

//     return deletedItems
// };

var removeElement = function(nums, val) {
    while(nums.indexOf(val) !== -1) {
        nums.splice(nums.indexOf(val), 1)
    }
    return nums.length
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));