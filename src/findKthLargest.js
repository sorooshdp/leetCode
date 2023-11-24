/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let n = nums.length;
  nums.sort((a, b) => {
    return a - b;
  });
  console.log(nums);
  return nums[n - k];
};

console.log(
  findKthLargest(
    [
      3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7,
      8, 5, 6,
    ],
    2
  )
);
