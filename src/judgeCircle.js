/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function (moves) {
    const movesObj = { U: 0, D: 0, R: 0, L: 0 }
    const movesArr = moves.split('');

    for (const move of movesArr) {
        movesObj[move]++;
    }

    return ((movesObj.U === movesObj.D) && (movesObj.R === movesObj.L)) ? true : false;
};

console.log(judgeCircle("LL"));