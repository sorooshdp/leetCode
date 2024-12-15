/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : val;
  }
}
const addTwoNumbers = function (l1, l2) {
  let new1 = l1.reverse();
  let new2 = l2.reverse();
  let result = new ListNode();
  let r = result;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry != 0) {
    let digit1 = l1 !== null ? l1.val : 0;
    let digit2 = l2 !== null ? l2.val : 0;

    sum = digit1 + digit2 + carry;
    r.next = new ListNode(sum % 10);
    r = r.next;

    carry = Math.floor(sum / 10);
    l1 = l1 != null ? l1.next : null;
    l2 = l2 != null ? l2.next : null;
  }

  return result.next;
};

addTwoNumbers([2, 4, 3], [5, 6, 4]);
