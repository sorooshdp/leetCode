/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sum = 0;
    salary.sort((a,b) => a - b);
    for (let i = 1; i < salary.length - 1; i++) {
        sum += salary[i];
    }

    return sum / (salary.length - 2)
};

console.log(average([4000,3000,1000,2000]))