/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let answer = 0;

  while (i < j) {
    let length = Math.min(height[i], height[j]);
    let width = j - i;
    if (height[i] < height[j]) {
      while (height[i] <= length && i < j) i++;
    } else {
      while (height[j] <= length && i < j) j--;
    }
    answer = Math.max(answer, length * width);
  }

  return answer;
};


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let answer = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    let maxHeight = Math.min(height[i], height[j]);
    let distance = j - i;
    if (height[i] < height[j]) {
      while (height[i] <= maxHeight && i < j) {
        i++;
      }
    } else {
      while (height[j] <= maxHeight && j < i) {
        j--;
      }
    }
    answer = Math.max(answer, maxHeight * distance);
  }

  return answer;
};


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
