/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
    const memo = new Map();
    return jumpCount(0);

    function jumpCount(index) {
        if (memo.has(index)) return memo.get(index);
        if (index > nums.length) return false;
        if (index === nums.length - 1) return true;
        for (let i = 1; i <= nums[index]; i++){
            if(i + index < nums.length && jumpCount(index + i) ) return true;
        }
        memo.set(index,false);
        return false
    }
};



console.log(canJump([3, 2, 1, 0, 4]));