/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let sign = n;
    let answer = 1;
    n = [...Math.abs(n).toString(2)];

    while (n.length) {
        let instruction = n.shift();
        switch (instruction) {
            case "0":
                answer *= answer;
                break;
            case "1":
                answer *= answer;
                answer *= x;
                break;
        }
    }

    return sign < 0 ? 1 / answer : answer;
};

console.log(myPow(2, 2));