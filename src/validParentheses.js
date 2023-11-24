class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    length() {
        return this.items.length
    }
}

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    // const st = new Stack();
    // const chars = s.split('');
    // console.log(chars);

    // for (const char of chars) {
    //     console.log(char);
    //     if (char === '(' || char === '{' || char === '[') {
    //         st.push(char)
    //     }
    //     else {
    //         if (!st.isEmpty()) {
    //             if ((char === ')' && st.peek() === '(') || (char === ']' && st.peek() === '[') || (char === '}' && st.peek() === '{')) {
    //                 st.pop();
    //             }
    //             else return false
    //         }
    //         else return false
    //     }
    // }

    // return st.length() === 0

    const bracketsObj = { '{': '}', '[': ']', '(': ')' };
    const char = s.split();
    const closedBrackets = [];

    for (let i = 0; i < char.length; i++) {
        if (bracketsObj[char[i]]) {
            closedBrackets.push(bracketsObj[char[i]])
        } else if (char[i] === bracketsObj[char[i]]) {
            closedBrackets.pop();
        } else return false
    }

    return closedBrackets.length === 0
};

console.log(isValid("(])"));