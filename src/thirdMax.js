/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });

  let uniq = [...new Set(nums)];

  if(uniq.length < 3){
    return uniq[uniq.length -1];
  }
  else return uniq[uniq.length - 3];
};
