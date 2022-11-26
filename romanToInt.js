/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;

  if (s.includes("IV")) {
    sum += 4;
    s = s.replace("IV", "");
  }
  if (s.includes("IX")) {
    sum += 9;
    s = s.replace("IX", "");
  }
  if (s.includes("XL")) {
    sum += 40;
    s = s.replace("XL", "");
  }
  if (s.includes("XC")) {
    sum += 90;
    s = s.replace("XC", "");
  }
  if (s.includes("CD")) {
    sum += 400;
    s = s.replace("CD", "");
  }
  if (s.includes("CM")) {
    sum += 900;
    s = s.replace("CM", "");
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      sum += 1;
    } else if (s[i] === "V") {
      sum += 5;
    } else if (s[i] === "X") {
      sum += 10;
    } else if (s[i] === "L") {
      sum += 50;
    } else if (s[i] === "C") {
      sum += 100;
    } else if (s[i] === "D") {
      sum += 500;
    } else if (s[i] === "M") {
      sum += 1000;
    }
  }

  return sum;
};

