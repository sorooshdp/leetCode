/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
    constructor(val, right, left) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
    const answer = [];
    const length = nums.length;
    const node = toBst(nums, 0, length - 1);
    return preOrder(answer, node);
};

const toBst = function (nums, start, end) {
    if (start > end) {
        return null;
    }

    let mid = Math.floor((start + end) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = toBst(nums, 0, mid - 1);
    node.right = toBst(nums, mid + 1, end);

    return node
}

const preOrder = function (arr, node) {
    if (node === null) {
        return
    }

    arr.push(node.val)
    preOrder(arr, node.left)
    preOrder(arr, node.right)

    return arr
}

console.log(sortedArrayToBST([1, 2, 3, 4]))