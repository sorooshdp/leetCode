/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function (fn, t) {
    let timeOut;
    return function (...args) {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            fn.apply(this, args)
        }, t)
    };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
