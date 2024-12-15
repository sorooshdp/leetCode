/**
 * @param {string} s
 * @return {string[]}
 */
const cellsInRange = function(s) {
   let parts = s.split(":");///get the rows and columns
   let cols = [];
   let rows = [];
   let answer = [];

    for (let i = 0; i < parts.length; i++) {//turn strings to ascii numbers
        cols.push(parts[i][0].charCodeAt(0));
        rows.push(parts[i][1].charCodeAt(0));
    }

    ///set two loops for the range of rows and columns according to ascii codes
    for (let i = Math.min(...cols); i <= Math.max(...cols) ; i++) {
        for (let j = Math.min(...rows); j <= Math.max(...rows); j++) {
            let element = "";
            element += (String.fromCharCode(i));///add column
            element += (String.fromCharCode(j));///add row
            answer.push(element);
        }
    }

    return answer;
};

console.log(cellsInRange("A1:F1"))