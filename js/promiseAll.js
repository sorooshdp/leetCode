/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        if (functions.length === 0) {
            resolve([]);
            return;
        }

        const resolvedFunctions = new Array(functions.length).fill(null);
        let resolvedCount = 0;
        functions.forEach(async (element, index) => {
            try {
                const state = await element();
                resolvedFunctions[index] = state;
                resolvedCount++;
                if (resolvedCount === functions.length) {
                    resolve(resolvedFunctions);
                }
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
