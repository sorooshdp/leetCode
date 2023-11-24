/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
    return (factorial((m + n) - 2)) / (factorial(m - 1) * factorial(n - 1))
};

const factorial = function (number) {
    if (number === 0)
        return 1;
    else
        return number * factorial(number - 1);
}

console.log(uniquePaths(3, 7));
// console.log(factorial(10))