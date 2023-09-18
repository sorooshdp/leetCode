/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = function (mat, k) {
    const strength = [];
    const answer = [];
    for (let i = 0; i < mat.length; i++) {
        strength.push([mat[i].filter( e => e === 1 ).length, i])
    }

    strength.sort(([aSum, aIndex], [bSum, bIndex]) => aSum - bSum || aIndex - bIndex);
    
    for (let i = 0; i < k; i++) {
        answer.push(strength[i][1])
    }
    return answer;
};

console.log(
    kWeakestRows(
        [
            [1, 1, 0, 0, 0],
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [1, 1, 1, 1, 1]
        ],
        3
    )
);
