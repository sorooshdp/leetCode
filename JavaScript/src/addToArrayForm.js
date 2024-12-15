/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = function (num, k) {
    const answer = []

    num.reverse()

    num.forEach(item => {
        answer.push((item + k) % 10)
        k = Math.floor((item + k) / 10);
    })

    while (k > 0) {
        answer.push(k % 10)
        k = Math.floor(k / 10)
    }

    return answer.reverse()
};

console.log(addToArrayForm([1,2,3,5], 46556))