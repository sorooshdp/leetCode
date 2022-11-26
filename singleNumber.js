/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  const toFindDuplicates = (arry) =>
    arry.filter((item, index) => arry.indexOf(item) !== index);
  const duplicates = toFindDuplicates(nums);
  for (let i = 0; i < nums.length; i++) {
    if (!duplicates.includes(nums[i])) {
      return nums[i];
    }
  }
  return [];
};

console.log(singleNumber([4,1,2,1,2]));
