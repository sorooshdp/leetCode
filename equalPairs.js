/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    const n = grid.length;
    const revGrid = [];
    let column;
    let count = 0;

    for (let i = 0; i < n; i++) {
        column = [];
        for (const row of grid) {
            column.push(row[i])
        }
        revGrid.push(column)
    }

    for (const column of revGrid) {
        for (const row of grid) {
            if (isArrEqual(column, row)) {
                count++
            }
        }
    }

    return count
};

const isArrEqual = (arr1, arr2) => {
    return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index])
}

console.log(equalPairs([[3, 2, 1],
[1, 7, 6],
[2, 7, 7]]));