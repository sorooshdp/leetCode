/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length / 2; i++) {
    for (let j = i; j < matrix.length - i - 1; j++) {
      let temp;
      temp = matrix[i][j];
      matrix[i][j] = matrix[matrix.length - 1 - j][i];

      matrix[matrix.length - 1 - j][i] =
        matrix[matrix.length - 1 - i][matrix.length - 1 - j];

      matrix[matrix.length - 1 - i][matrix.length - 1 - j] = matrix[j][matrix.length - 1 - i];

      matrix[j][matrix.length - 1 - i] = temp;
    }
  }

  return matrix;
};

console.log(rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]));
