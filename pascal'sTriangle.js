/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (num) {
  let answer = [];
  for (let i = 0; i < num; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        row.push(1);
      } else {
        row.push(answer[i - 1][j - 1] + answer[i - 1][j]);
      }
    }
    answer.push(row);
  }

  return answer;
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let answer = [];
  for (let i = 0; i < rowIndex + 1; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        row.push(1);
      } else {
        row.push(answer[i - 1][j - 1] + answer[i - 1][j]);
      }
    }
    answer.push(row);
  }

  return answer[rowIndex];
};

console.log(getRow(3));
