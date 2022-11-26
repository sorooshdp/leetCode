/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  return  nums.reduce((prev, curr) => prev.concat(prev.map(k => k.concat(curr))), [[]]);
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const res = []
    const helper = (index, list)=>{
        res.push(list.slice())
        for (let i = index; i < nums.length; i++) {
            list.push(nums[i]) 
            helper(i+1, list) 
            list.pop()
        }
    }
    helper(0,[])
    return res
};

console.log(subsets([1,2,3]));
