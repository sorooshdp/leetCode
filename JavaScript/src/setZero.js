/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  ///find row and columns that sould be set to zeroes
  let row = [];
  let column = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!matrix[i][j]) {
        row.push(i);
        column.push(j);
      }
    }
  }

  ///set rows to zero
  for (let i = 0; i < matrix.length; i++) {
    if (row.includes(i)) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  ///set columns to zero
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (column.includes(j)) {
        matrix[i][j] = 0;
      }
    }
  }

};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
