/**
 * @param {number} n
 * @return {number[][]}
 */
// const generateMatrix = function (n) {
//     let arr = new Array(n);
//     for (let i = 0; i < n; i++) {
//       arr[i] = new Array(n);
//     }
//     let value = 1;

//     let endCol = n - 1, endRow = n - 1;
//     let startCol = 0, startRow = 0;

//     while (startRow <= endRow && startCol <= endCol) {
//         for (let col = startCol; col <= endCol; col++) {
//             arr[startRow][col] = value;
//             value++;
//         }

//         startRow++;

//         for (let row = startRow; row <= endRow; row++) {
//             arr[row][endCol] = value;
//             value++;
//         }

//         endCol--;

//         if (startRow <= endRow) {
//             for (let col = endCol; endCol >= startCol; col--) {
//                 arr[endRow][col] = value;
//                 value++
//             }
//             endRow--;
//         }

//         if (startCol < endCol) {
//             for (let row = endRow; endRow >= startRow; row++) {
//                 arr[row][startCol] = value;
//                 value++;
//             }
//             startCol++;
//         }
//     }

//     console.log(arr);
// };

function generateMatrix(n) {
    let matrix = new Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n);
    }

    let num = 1;
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    while (num <= n * n) {
        // Traverse from left to right
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num;
            num++;
        }
        top++;

        // Traverse from top to bottom
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num;
            num++;
        }
        right--;

        // Traverse from right to left
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num;
            num++;
        }
        bottom--;

        // Traverse from bottom to top
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num;
            num++;
        }
        left++;
    }

    return matrix;
}

generateMatrix(2)