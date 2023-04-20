/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
    if(n < 0)
        return false

    return !(n&(n-1));
};