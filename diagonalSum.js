/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = function (mat) {
  let sum = 0;
  for (let x = 0, y = 0; x < mat.length, y < mat.length; x++, y++) {
    sum += mat[y][x];
  }

  if (mat[0][mat.length - 1] !== undefined)
    for (let x = mat.length - 1, y = 0; x >= 0, y < mat.length; y++, x--) {
      if (y === x) continue;
      sum += mat[y][x];
    }

  return sum;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
