/**
 * @param {string} formula
 * @return {string}
 */
const countOfAtoms = function (formula) {
    const parse = formula.match(/([A-Z][a-z]*)(\d*)|(\()|(\))(\d*)/g);
    const stack = [{}];
    for (let i = 0; i < parse.length; i++) {
        const match = parse[i].match(/([A-Z][a-z]*)(\d*)|(\()|(\))(\d*)/);
        const name = match[1];
        const m1 = match[2];
        const left_open = match[3];
        const right_open = match[4];
        const m2 = match[5];

        if (name) {
            stack[stack.length - 1][name] = (stack[stack.length - 1][name] || 0) + parseInt(m1 || "1");
        }

        if (left_open) {
            stack.push({});
        }

        if (right_open) {
            const top = stack.pop();
            for (const k in top) {
                stack[stack.length - 1][k] = (stack[stack.length - 1][k] || 0) + top[k] * parseInt(m2 || "1");
            }
        }
    }

    return Object.keys(stack[0]).sort().map(name => name + (stack[0][name] > 1 ? stack[0][name].toString() : "")).join("");

};
