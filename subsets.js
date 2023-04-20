/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
const subsets2 = function (nums) {
    return nums.reduce((prev, curr) => prev.concat(prev.map(k => k.concat(curr))), [[]]);
};

*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*const subsets = function (nums) {
    const arr = [...new Set(nums)]
    const res = []
    const helper = (index, list) => {
        res.push(list.slice())
        for (let i = index; i < arr.length; i++) {
            list.push(arr[i])
            helper(i + 1, list)
            list.pop()
        }
    }
    helper(0, [])
    return res
};*/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function (num, k) {
    const subStrLength = num.length - k;

    if (subStrLength === 0) {
        return '0'
    }

    console.log(getAllSubsets(num, subStrLength))
    let MIN_VAL = 0;

    // subStrs.forEach((item) => {
    //     if (parseInt(item) < MIN_VAL) {
    //         MIN_VAL = parseInt(item);
    //     }
    // })

    return MIN_VAL.toString();
};

const getAllSubsets = function (array, n) {
    const subsets = [[]];

    for (const el of array) {
        const last = subsets.length - 1;
        for (let i = 0; i <= last; i++) {
            if ([...subsets[i], el].length === n)
                subsets.push([...subsets[i], el]);
        }
    }

    return subsets.slice(1);
}

console.log(getAllSubsets("456", 2));
