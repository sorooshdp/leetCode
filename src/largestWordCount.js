/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
const largestWordCount = function (messages, senders) {
    let MIN_INT_VAL = Number.MIN_VALUE;
    let counts = {};
    let name;

    senders.forEach((item) => {
        counts[item] = 0;
    })

    messages.forEach((item, index) => {
        let count = item.split(" ").length
        counts[senders[index]] += count;
    })

    Object.keys(counts).forEach((item,index) => {
        if (counts[item] > MIN_INT_VAL) {
            MIN_INT_VAL = counts[item]
            name = item
        }
        if(counts[item] === MIN_INT_VAL){
            if(stringCompare(item,name) > 0){
                name = item
            }
        }
    })

    return name
};

const stringCompare = function (str1, str2) {
    for (let i = 0; i < str1.length && i < str2.length; i++) {
        if (str1.charCodeAt(i) !== str2.charCodeAt(i)) {
            return str1.charCodeAt(i) - str2.charCodeAt(i);
        }
    }

    if (str1.length < str2.length) {
        return str1.length - str2.length;
    } else if (str1.length > str2.length) {
        return str1.length - str2.length;
    } else {
        return 0;
    }
}

largestWordCount(["How is leetcode for everyone","Leetcode is useful for practice"],
    ["Bob","Charlie"])