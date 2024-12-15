/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    const text = x.toString();
    const splitText = text.split("");
    const reverse = splitText.reverse();
    const joinedText = reverse.join("");

    if(joinedText === text) {
        return true;
    }
    else return false;
};

console.log(isPalindrome(121));