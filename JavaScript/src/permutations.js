/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let answer = [];

  var permuter = function (arr, permutation = []) {
    if (arr.length === 0) {
      return answer.push(permutation);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let currentArr = arr.slice();
        let next = currentArr.splice(i, 1);
        permuter(currentArr, permutation.concat(next)); ///we use concat because splice returns an array.
      }
    }
  };

  permuter(nums);

  return answer;
};

console.log(permute([1, 2, 3]));
