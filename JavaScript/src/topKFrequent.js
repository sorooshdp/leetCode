/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
    let answer = [];
    let frequency = [];
    let uniq = [...new Set(nums)];
    for (let i = 0; i < uniq.length; i++) {
        frequency.push([uniq[i] ,nums.filter(x => x === uniq[i]).length]);
    }

    frequency.sort( (a,b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        answer.push(frequency[i][0]);
    }

    return answer;
};

console.log(topKFrequent([1,1,1,2,2,3], 2))