/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function (left, right) {
    let isDividable;
    const answer = [];

    for (let i = left; i <= right; i++) {
        isDividable = true;
        let copy = i;
        while(copy){
            let num = copy % 10
            if(i % num !== 0){
                isDividable = false;
                break;
            }
            copy = Math.floor(copy / 10);
        }

        if(isDividable){
            answer.push(i);
        }
    }

    return answer;
};

console.log(selfDividingNumbers(1,22))