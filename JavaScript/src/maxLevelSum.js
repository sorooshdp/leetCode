/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
    if (!root) {
        return 0;
    }

    let maxSum = -Infinity;
    let currentLevel = 1;
    let maxLevel = 1;

    const queue = [{ node: root, level: currentLevel }];

    while (queue.length > 0) {
        let nodes = queue.length;
        let currentSum = 0;

        for (let i = 0; i < nodes; i++) {
            const { node, level } = queue.shift();
            currentSum += node.val;

            if (node.right) {
                queue.push({ node: node.right, level: currentLevel + 1 });
            }
            if (node.left) {
                queue.push({ node: node.left, level: currentLevel + 1 });
            }
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            maxLevel = currentLevel;
        }

        currentLevel += 1;
    }

    return maxLevel;
};