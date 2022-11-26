/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  for (let i = 0; i < words.length - 1; i++) {
    if (isAnagram(words[i], words[i + 1])) {
      words.splice(i + 1, 1);
      i--;
    }
  }

  return words;
};

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


console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]));
