/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  const len1 = num1.length,
    len2 = num2.length,
    result = new Array(len1 + len2).fill(0);
  let pointer1 = 0,
    pointer2 = 0,
    sum = 0;

  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      pointer1 = i + j;
      pointer2 = i + j + 1;
      sum = result[pointer2] + (Number(num1[i]) * Number(num2[j]));
      result[pointer2] = sum % 10;
      result[pointer1] += Math.floor(sum / 10);
    }
  }

  if (result[0] === 0) result.shift();

  return result.join("");
};

console.log(multiply("123", "456"));
