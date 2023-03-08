function bigFactorial(n) {
    let answer = ''
    let res = [1];
    let resSize = 1;

    for (let x = 2; x <= n; x++) {
        let carry = 0;
        for (let i = 0; i < resSize; i++) {
            let prod = res[i] * x + carry;
            res[i] = prod % 10;
            carry = Math.floor(prod / 10);
        }
        while (carry) {
            res[resSize] = carry % 10;
            carry = Math.floor(carry / 10);
            resSize++;
        }
    }

    for (let i = resSize - 1; i >= 0; i--)
        answer += res[i].toString();

    return answer
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(1000))

//1.7976931348623157e+308  = max size
