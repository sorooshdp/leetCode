// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function (nums1, nums2) {
//   let nums = [...nums1, ...nums2];
//   nums.sort(function (a, b) {
//     return a - b;
//   });
//   if (nums.length % 2 == 0) {
//     return (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
//   }
//   else{
//     return nums[Math.floor(nums.length / 2)];
//   }

// };

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1 = [...nums1, ...nums2];///merge two arrays
console.log(nums1);
  ///sort arrays
  nums1.sort(function (a, b) {
    return a - b;
  });

  ///remove zeros
  for (let i = 0; i < nums1.length; i++) {
    if(nums1[i] === 0)
    {
        nums1.shift();
        i--;
    }
  }
  console.log(nums1);

};

console.log(merge(
    [1,2,3,0,0,0],
    3,
    [2,5,6],
    3));
