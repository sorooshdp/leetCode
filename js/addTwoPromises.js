/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function(promise1, promise2) {
    const val = await promise1
    const val2 = await promise2

    return val + val2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */