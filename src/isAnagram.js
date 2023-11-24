/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let first = s.split("").sort().join("");
  let second = t.split("").sort().join("");
  if (first === second) return true;
  else return false;
};
