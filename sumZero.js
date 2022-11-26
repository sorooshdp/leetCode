/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    if (n % 2 == 0) {
      if (i % 2 == 0) {
        answer.push(-1);
      } else answer.push(1);
    } else {
      if (i % 2 == 0) {
        answer.push(-1);
      } else answer.push(1);
      if(i == n-1)
      {
        answer.push(0)
      }
    }
  }

  return answer;
};
