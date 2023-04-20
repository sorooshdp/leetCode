/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0) {
        let sum = carry;

        if (i >= 0) {
            sum += parseInt(a[i]);
            i--;
        }

        if (j >= 0) {
            sum += parseInt(b[j]);
            j--;
        }

        if (sum === 0 || sum === 1) {
            result += sum.toString();
            carry = 0;
        } else if (sum === 2) {
            result += "0";
            carry = 1;
        } else {
            result += "1";
            carry = 1;
        }
    }

    if (carry > 0) {
        result += "1";
    }

    return result.split("").reverse().join("");
};

console.log(addBinary('11', '1'))