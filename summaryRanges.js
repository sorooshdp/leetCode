/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
    const answer = [];
    let index = 0;
    let range = '';

    while (index < nums.length) {
        if (nums[index + 1] !== nums[index] + 1) {
            answer.push(range + `${nums[index]}`)
            index++;
            range = '';
        } else if ((nums[index + 1] === nums[index] + 1) && range.length === 0) {
            range = `${nums[index]}->` + range;
            index++;
        } else {
            index++;
        }
    }

    return answer;
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));