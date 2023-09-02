/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
    const length = Math.max(word1.length, word2.length)
    const result = []
  
    for(i=0; i <  length ; i++){
      if(word1[i]) result.push(word1[i])
      if(word2[i]) result.push(word2[i])
    }
    return result.join('')
};

console.log(mergeAlternately("asdf", "jkl"));