"use strict";
const flat = function (arr, n) {
    if (n === 0) {
        return arr;
    }
    const result = [];
    arr.forEach(item => {
        if (typeof item === 'number') {
            result.push(item);
        }
        else {
            result.push(...flat(arr, n - 1));
        }
    });
    return result;
};
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));
