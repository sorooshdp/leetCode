/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    let mp = {};
    for(let i = 0; i < nums.length; ++i){
        if(i - mp[nums[i]] <= k) return true;
        mp[nums[i]] = i;
    }
    return mp;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
