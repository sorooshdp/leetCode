/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
    let result = [];
    function helper(node,result){
        if(!node) return;
         helper(node.left,result);
         result.push(node.val);
         helper(node.right,result);
        return;
    }
    helper(root,result);
    return result[k-1];
};

// const inorder = function (node, answer) {
//     if (node === null)
//         return

//     inorder(node.left, answer)
//     answer.push(node.val)
//     inorder(node.right, answer)

//     return answer
// }



