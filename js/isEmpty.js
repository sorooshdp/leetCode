/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = function (obj) {
    return !Object.keys(obj).length
};

console.log(isEmpty({ x: 5, y: 42 }));
