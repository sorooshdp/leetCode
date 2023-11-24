/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
    const nums = [];
    let num = n.toString();
    let newNum = 0;

    while (true) {
        for (let i = 0; i < num.length; i++) {
            newNum += Math.pow(parseInt(num.charAt(i)), 2)
        }
        if (newNum === 1) {
            return true
        }
        if (nums.includes(newNum)) {
            return false
        }

        nums.push(newNum);
        num = newNum.toString();
        newNum = 0;
    }
};

console.log(isHappy(19));