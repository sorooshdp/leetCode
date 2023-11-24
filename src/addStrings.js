/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
    return (strToNum(num1) + strToNum(num2)).toString()

};

const strToNum = function (num) {
    const nums = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9}

    let outPut = 0;
    for (let i = 0; i < num.length; i++) {
        outPut = outPut * 10 + nums[num[i]];
    }

    return outPut
}

console.log(addStrings("999","1"))
