/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
    let dummy = new ListNode(0, head)

    let curr, prev;
    prev = dummy;
    curr = head;

    while(curr){
        if(curr.val === val)
            prev.next = curr.next
        else 
            prev = curr
        curr = curr.next
    }

    return dummy.next
};