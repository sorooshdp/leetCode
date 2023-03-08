/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function(nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if(nums[i] === nums[j])
            {
                count++
            }
        }
    }
    return count
}