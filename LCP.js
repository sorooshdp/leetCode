/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let compare = strs[0];
  let str = "";
  for (let i = 1; i < strs.length; i++) {
    let  j = 0;
    while(compare[j] != undefined && strs[i][j] != undefined) {
        if(strs[i][j] == compare[j]) {
            str += strs[i][j];
        }
        j++;
    }
    compare = str;
    str = "";
  }

  return compare;
};


console.log(longestCommonPrefix(["flower","flow","flight"]));