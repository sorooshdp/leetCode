/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
    const group = {};
    let key;
    this.forEach((item) => {
        key = fn(item);
        if (group[key] === undefined) {
            group[key] = [];
        }
        group[key].push(x);
    });

    return group;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
