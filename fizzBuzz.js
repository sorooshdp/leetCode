/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        if ((i % 5 === 0) && (i % 3 === 0)) {
            answer[i - 1] = "FizzBuzz";
        } else if (i % 5 === 0) {
            answer[i - 1] = "Buzz";
        } else if (i % 3 === 0) {
            answer[i - 1] = "Fizz";
        } else {
            answer[i - 1] = `${i}`;
        }
    }
    return answer;
};

