/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let middel = head.length;
    if(middel%2 === 0 )
    {
        head.splice(0,(middel/2));
    }
    else 
    {
        head.splice(0,Math.ceil((middel/2)-1));
    }
    return head;
    
};
  