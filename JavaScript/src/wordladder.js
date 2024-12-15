function ladderLength(beginWord, endWord, wordList) {
    const set = new Set(wordList);
    if (!set.has(endWord)) return 0;

    const queue = [];
    queue.push(beginWord);

    const visited = new Set();
    queue.push(beginWord);

    let changes = 1;

    while (queue.length !== 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const word = queue.shift();
            if (word === endWord) return changes;

            for (let j = 0; j < word.length; j++) {
                for (let k = "a".charCodeAt(0); k <= "z".charCodeAt(0); k++) {
                    const arr = word.split("");
                    arr[j] = String.fromCharCode(k);

                    const str = arr.join("");
                    if (set.has(str) && !visited.has(str)) {
                        queue.push(str);
                        visited.add(str);
                    }
                }
            }
        }
        ++changes;
    }
    return 0;
}

console.log(
    ladderLength("new", "van", [
        "bet",
        "cat",
        "ben",
        "van",
        "net",
        "can",
        "ban",
    ])
);
