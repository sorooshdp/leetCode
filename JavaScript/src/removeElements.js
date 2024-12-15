/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  while (head.next != null) {
    if (head.val == val) {
      head = head.next;
      head.val = null;
      delete head;
    }
    head = head.next;
  }

};

console.log(removeElements([1, 2, 6, 3, 4, 5, 6], 6));
