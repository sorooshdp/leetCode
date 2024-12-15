/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
    const answer = []
    inorder(root, answer)

    return answer
};

const inorder = function (node, answer) {
    if (node === null)
        return

    inorder(node.left,answer)
    answer.push(node.val)
    inorder(node.right,answer)

    return answer
}

let root;
root = new TreeNode('A');
root.left = new TreeNode('B');
root.right = new TreeNode('C');
root.right.left = new TreeNode('D');
root.right.right = new TreeNode('E');
root.right.right.left = new TreeNode('F');
root.right.right.right = new TreeNode('G');

console.log(inorderTraversal(root))