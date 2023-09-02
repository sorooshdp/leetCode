/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function (letters, target) {
    const charCode = target.charCodeAt(0);

    const answer = letters.filter(letter => letter.charCodeAt(0) > charCode)

    return answer.length ? answer[0] : letters[0];
};
console.log(nextGreatestLetter(["c", "f", "j"], "c"));