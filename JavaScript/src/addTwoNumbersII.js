class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : val;
  }
}

const addTwoNumbers = function (l1, l2) {
  let stack1 = [],
    stack2 = [],
    carry = 0,
    head = null,
    newNode = null,
    val1 = 0,
    val2 = 0,
    total = 0;

  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  while (stack1.length || stack2.length || carry) {
    val1 = stack1.pop() || 0;
    val2 = stack2.pop() || 0;

    total = val1 + val2 + carry;
    carry = Math.floor(total / 10)
    newNode = new ListNode(total % 10);
    newNode.next = head
    head = newNode;
  }

  return head;
};
