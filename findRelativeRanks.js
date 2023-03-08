/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function (score) {
    let index = new Array(score.length)

    for (let i = 0; i < score.length; i++) {
        index[i] = i;
    }

    index.sort((a, b) => score[b] - score[a]);

    let result = new Array(score.length);

    for (let i = 0; i < score.length; i++) {
        if (i === 0) {
            result[index[i]] = "Gold Medal";
        }
        else if (i === 1) {
            result[index[i]] = "Silver Medal";
        }
        else if (i === 2) {
            result[index[i]] = "Bronze Medal";
        }
        else {
            result[index[i]] = (i + 1) + "";
        }
    }

    return result;
};

console.log(findRelativeRanks([10, 4, 75, 2, 0]))