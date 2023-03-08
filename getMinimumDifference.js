/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */

const getMinimumDifference = function (root) {
    let prev = -Infinity, minDiff = Infinity;
    const recursive = (node) => {
        if (!node) return;
        recursive(node.left);
        minDiff = Math.min(minDiff, node.val - prev);
        prev = node.val;
        recursive(node.right);
    }
    recursive(root);
    return minDiff;
};

console.log(getMinimumDifference([4, 2, 6, 1, 3]));