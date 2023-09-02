/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let sChar = 0;
    let tChar = 0;
    for (let i = 0; i < t.length; i++) {
        tChar += t.charCodeAt(i);
        if (i < s.length)
            sChar += s.charCodeAt(i);
    }

    return String.fromCharCode(tChar - sChar);
};

console.log(findTheDifference('asdfg', 'asdfge'));