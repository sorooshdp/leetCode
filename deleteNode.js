/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    nextNode = node.next;
   
    node.val = nextNode.val;
  
    node.next = nextNode.next;
    nextNode.next = null;
    delete(nextNode);
};

console.log(deleteNode());