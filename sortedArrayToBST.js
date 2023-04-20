/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class Node {
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
    const n = nums.length;
    root = toBST(nums, 0, n - 1);
    preOrder(root, []);
};

/* A utility function to print preorder traversal of BST */
function preOrder(node,arr = []) {
    if (node == null) {
        return;
    }
    arr.push(node.val);
    preOrder(node.left,arr);
    preOrder(node.right,arr);

    return arr
}

function toBST(arr, start, end) {
    if (start > end) {
        return null;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);
    node.left = toBST(arr, start, mid - 1);
    node.right = toBST(arr, mid + 1, end);

    return node;
}

console.log(sortedArrayToBST([1,2,3,4]))