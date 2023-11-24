/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = function (num) {
    if(num % 2 === 1) return false;

    let answer = 1;

    for (let i = 2; i <= Math.floor(num / 2); i++) {
        if ((num % i) === 0)
            answer += i;
    }

    return answer === num;
};

console.log(checkPerfectNumber(28))