/**
 * @param {number} n
 * @return {string[]}
 */
/*var generateParenthesis = function (n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push("(", ")");
  }
  arr = permute(arr);
  for (let i = 0; i < arr.length; i++) {
    let value = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == ")") {
        value--;
      } else value++;

      if (value < 0) {
        arr.splice(i, 1);
        i--;
        break;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].join("");
  }

return [...new Set(arr)];//remove duplicates
};*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
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
*/

var generateParenthesis = function (n) {
  let answer = [];
  if (n == 0) {
    answer.push("");
  } else {
    for (let i = 0; i < n; ++i)
      for (const left of generateParenthesis(i))
        for (const right of generateParenthesis(n-1-i))
          answer.push("(" + left + ")" + right);
  }

  return answer;
};

console.log(generateParenthesis(1));
