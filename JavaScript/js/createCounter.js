/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let num = n - 1;
  return function () {
    num += 1;
    return num;
  };
};

const counter = createCounter(10);
console.log(counter()) // 12
console.log(counter()) // 12
console.log(counter()) // 12