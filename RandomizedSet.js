var RandomizedSet = function () {
    this.arr = [];
    this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) {
        return false;
    }
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) return false;
    const idx = this.map.get(val);
    const temp = this.arr[this.arr.length - 1];
    this.arr[this.arr.length - 1] = this.arr[idx];
    this.ar[idx] = temp;
    this.arr.pop();
    this.map.set(this.arr[idx], idx);
    this.map.delete(val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.arr[Math.floor(Math.random() * this.arr.length)]
}

var obj = new RandomizedSet();
var param_2 = obj.remove(3);
var param_1 = obj.insert(3);
var param_3 = obj.getRandom();  
console.log(param_1, param_2, param_3)


