/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
const allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  let rc = rows * cols;
  let pointDistances = new Array(rc);
  let k = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let distance = Math.abs(r - rCenter) + Math.abs(c - cCenter);
      pointDistances[k] = [r, c, distance];
      k++;
    }
  }

  pointDistances.sort(function(a, b) {
    return a[2] - b[2];
  });

  for (let i = 0; i < rc; i++) {
    pointDistances[i].pop();
  }

  return pointDistances;

};

console.log(allCellsDistOrder(2, 3, 1, 2));



// var allCellsDistOrder = function(R, C, r0, c0) {
//   let rc = R * C;
//   let pointDistances = new Array(rc);
//   let k = 0;
//
//   for (let r = 0; r < R; r++) {
//     for (let c = 0; c < C; c++) {
//       let distance = Math.abs(r - r0) + Math.abs(c - c0);
//       pointDistances[k] = [r, c, distance];
//       k++;
//     }
//   }
//
//   pointDistances.sort(function(a, b) {
//     return a[2] - b[2];
//   });
//
//   for (let i = 0; i < rc; i++) {
//     pointDistances[i].pop();
//   }
//
//   return pointDistances;
// };