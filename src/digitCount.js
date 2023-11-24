/**
 * @param {string} num
 * @return {boolean}
 */
const digitCount = function (num) {
    const arr = num.split("");
    let count, isTrue = true;
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        arr.forEach(item => {
            if (parseInt(item) === i) {
                count++
            }
        })

        if (count !== parseInt(arr[i])) {
            isTrue = false;
            break;
        }
    }

    return isTrue;
};