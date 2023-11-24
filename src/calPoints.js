/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = function (operations) {
    const points = [];

    for (const operand of operations) {
        if (operand === '+') {
            points.push(points[points.length - 2] + points[points.length - 1])
        } else if (operand === 'D') {
            points.push(points[points.length - 1] * 2)
        } else if (operand === 'C') {
            points.pop()
        } else {
            
            points.push(parseInt(operand))
        }
    }

    return points.reduce((a, b) => {
        return a + b;
    }, 0);
};

console.log(calPoints(["5","-2","4","C","D","9","+","+"]));