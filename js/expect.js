/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (toCmp) {
        if(toCmp === val) {
            return true
        } else throw "Not Equal"
    },
    notToBe: function (toCmp) {
      if(toCmp !== val){
        return true
      } else throw "Equal"
    },
  };
};

console.log(expect(5).toBe(5))
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
