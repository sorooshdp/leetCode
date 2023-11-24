// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var groupAnagrams = function (strs) {
//   let answer = [];
//   for (let i = 0; i < strs.length; i++) {
//     let permotion = permute(strs[i].split(""));
//     answer.push(permotion);
//   }

//   // console.log(answer);
//   for (let i = 0; i < answer.length; i++) {
//     let anagram = [];
//     for (let j = 0; j < answer[i].length; j++) {
//       if (strs.some((item) => item === answer[i][j])) {
//         anagram.push(answer[i][j]);
//       }
//     }

//     answer.push(anagram);
//   }

// };

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var permute = function (nums) {
//   let answer = [];

//   var permuter = function (arr, permutation = []) {
//     if (arr.length === 0) {
//       return answer.push(permutation);
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         let currentArr = arr.slice();
//         let next = currentArr.splice(i, 1);
//         permuter(currentArr, permutation.concat(next)); ///we use concat because splice returns an array.
//       }
//     }
//   };

//   permuter(nums);

//   for (let i = 0; i < answer.length; i++) {
//     answer[i] = answer[i].join("");
//   }

//   return answer;
// };

var groupAnagrams = function (strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");

    obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);

    
  }
  return Object.values(obj);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
