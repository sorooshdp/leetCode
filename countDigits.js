/**
 * @param {number} num
 * @return {number}
 */
const countDigits = function (num) {
    const digits = num.toString().split('');
    let answer = 0;

    digits.forEach(item => {
        if(num % parseInt(item) === 0){
            answer++
        }
    })
};