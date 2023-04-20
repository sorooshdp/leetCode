/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function (grid) {
    let j = 0, negativeCount = 0

    for (let i = 0; i < grid.length; i++) {
        j = grid[i].length - 1
        while (grid[i][j] < 0) {
            negativeCount++
            j--
        }
    }

    return negativeCount;
};