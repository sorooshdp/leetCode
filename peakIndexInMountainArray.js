/**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = function(arr) {
    return arr.indexOf(Math.max(...arr));
};
