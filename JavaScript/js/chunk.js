/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function (arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.splice(i, i + size));
    }
    return result;
};
