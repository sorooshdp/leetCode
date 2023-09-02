/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  s = s.trim().split(' ');  
  return s[s.length - 1].length
};

console.log(lengthOfLastWord('   hello    world   '));