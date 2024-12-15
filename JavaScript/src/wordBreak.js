/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
/*const wordBreak = function (s, wordDict) {
    if (s.length === 0)
        return true

    for (const word of wordDict) {
        if (s.indexOf(word) === 0) {
            if (wordBreak(s.slice(word.length), wordDict)) {
                return true
            }
        }
    }

    return false
};*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
/*const wordBreak = (s, wordDict) => {
    // We break down the word each recursive call
    // Base case is the broken down word becomes an empty string, which means we found a path
    if (!s) return true;

    // We need to loop everyword in the wordDict
    for (let word of wordDict) {
        // indexOf will give us the prefix START of the word we pass in
        // So if s.indexOf(word) is 0, we know the word is the prefix
        if (s.indexOf(word) === 0) {
            // If they match, we continue our recursion
            // We pass in the NEW s with the word sliced from the prefix, we also need to pass wordDict
            // If we ever hit our base case, this will evaluate to true and return true overall
            if (wordBreak(s.slice(word.length), wordDict)) {
                return true;
            }
        }
    }

    // If we never make it to a base case, we have no answers
    return false;
};*/

/*
const wordBreak = (s, wordDict) => {
    let set = new Set(wordDict);
    /!*  set.add(wordDict);*!/

    console.log(set)

    const recursion = (s, set) => {
        const length = s.length

        if (length === 0) {
            return true;
        }
        for (let i = 1; i < length; i++) {
            if (set.has(s.slice(0, i)) && recursion(s.slice(i), set)) {
                return true
            }
        }

        return false
    }

    return recursion(s, set)
}

// JavaScript code for segmenting a string
function wordBreak(s, wordDict) {
    // base case
    if (s.length === 0) {
        return true;
    }

    // try every word in the dictionary as the first word
    for (let i = 0; i < wordDict.length; i++) {
        let word = wordDict[i];
        // if the first word in the string matches the word in the dictionary
        if (s.startsWith(word)) {
            // check if the rest of the string can be segmented
            let remainingString = s.substring(word.length);
            if (segmentString(remainingString, wordDict)) {
                // if so, return true
                return true;
            }
        }
    }
    // none of the words in the dictionary can segment the string
    // so return false
    return false;
}*/

/*//JavaScript code for segmenting a string with fast execution time
function wordBreak(s, wordDict, memo = {}) {
    // base case
    if (s.length === 0) {
        return true;
    }

    // if the string is already in the memo, return the result
    if (s in memo) {
        return memo[s];
    }

    // try every word in the dictionary as the first word
    for (let i = 0; i < wordDict.length; i++) {
        let word = wordDict[i];
        // if the first word in the string matches the word in the dictionary
        if (s.startsWith(word)) {
            // check if the rest of the string can be segmented
            let remainingString = s.substring(word.length);
            if (wordBreak(remainingString, wordDict)) {
                // if so, return true
                memo[s] = true;
                return true;
            }
        }
    }
    // none of the words in the dictionary can segment the string
    // so return false
    memo[s] = false;
    return false;
}*/

const wordBreak = (s, wordDict) => {
    if (wordDict == null || wordDict.length === 0) return false;

    const set = new Set(wordDict);
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let end = 1; end <= s.length; end++) {
        for (let start = 0; start < end; start++) {
            const w = s.slice(start, end);
            if (dp[start] === true && set.has(w)) {
                dp[end] = true;
                break;
            }
        }
    }
    return dp[s.length];
};

console.log(wordBreak("cars", ["car","s"]))
