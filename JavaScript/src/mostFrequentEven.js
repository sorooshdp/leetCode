/**
 * @param {number[]} nums
 * @return {number}
 */
const mostFrequentEven = function (nums) {
    let evenNums = nums.filter(function (e) {
        return e % 2 === 0;
    })

    if(evenNums.length === 0)
        return -1;

    return Math.min(...topFrequent(evenNums));
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const topFrequent = function (nums) {
    let answer = [];
    let frequency = [];
    let uniq = [...new Set(nums)];
    for (let i = 0; i < uniq.length; i++) {
        frequency.push([uniq[i], nums.filter(x => x === uniq[i]).length]);
    }

    frequency.sort((a, b) => b[1] - a[1]);

    const topFrequencies = frequency.filter(function (e) {
        return e[1] === frequency[0][1];
    });

    for (let i = 0; i < topFrequencies.length; i++)
        answer.push(frequency[i][0]);
    return answer
};

console.log(mostFrequentEven([3,3,3,3]))