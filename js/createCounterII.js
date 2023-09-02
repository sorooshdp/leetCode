/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let initCopy = init;
  return {
    increment: function () {
      initCopy += 1;
      return initCopy;
    },
    decrement: function () {
      initCopy -= 1;
      return initCopy;
    },
    reset: function () {
      initCopy = init;
      return initCopy;
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
