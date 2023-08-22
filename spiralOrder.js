/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
    const result = [];
  
    if (matrix.length === 0) return result; // Return empty array if the input is empty
  
    let topRow = 0;
    let bottomRow = matrix.length - 1;
    let leftColumn = 0;
    let rightColumn = matrix[0].length - 1;
  
    while (topRow <= bottomRow && leftColumn <= rightColumn) {
      // Traverse top row
      for (let i = leftColumn; i <= rightColumn; i++) {
        result.push(matrix[topRow][i]);
      }
      topRow++;
  
      // Traverse right column
      for (let i = topRow; i <= bottomRow; i++) {
        result.push(matrix[i][rightColumn]);
      }
      rightColumn--;
  
      // Traverse bottom row
      if (topRow <= bottomRow) {
        for (let i = rightColumn; i >= leftColumn; i--) {
          result.push(matrix[bottomRow][i]);
        }
      }
      bottomRow--;
  
      // Traverse left column
      if (leftColumn <= rightColumn) {
        for (let i = bottomRow; i >= topRow; i--) {
          result.push(matrix[i][leftColumn]);
        }
      }
      leftColumn++;
    }
  
    return result; 
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ])
);
