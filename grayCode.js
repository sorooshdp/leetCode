/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = function (n) {
    const graySeq = [];
    for (let i = 0; i < (1 << n); i++) {
        graySeq.push(i ^ (i >> 1));
    }
    return graySeq;
};

console.log(grayCode(3))