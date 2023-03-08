/**
 * @param {number} n
 * @param {number} k
 * @return {*[]}
 */

/*const findTheWinner = function (n, k) {
    const arr = []
    let lastKilled;

    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

   for(let i = 0; i < n; i++){
       for (let j = 0; j < k - 1; j++) {
           arr.push(arr.splice(0,1)[0])
       }
       lastKilled = arr.shift();
   }

    return lastKilled
};*/


class Node {
    constructor(num) {
        this.num = num;
        this.next = null;
        this.prev = null;
    }

    kill() {
        this.prev.next = this.next;
        this.next.prev = this.prev;
    }
}

function findTheWinner(n, k) {
    let firstNode = new Node(1);
    let prevNode = firstNode;
    for (let i = 2; i <= n; i++) {
        let currentNode = new Node(i);
        currentNode.prev = prevNode;
        prevNode.next = currentNode;
        prevNode = currentNode;
    }
    firstNode.prev = prevNode;
    prevNode.next = firstNode;

    let currentNode = prevNode;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < k; j++) {
            currentNode = currentNode.next;
        }
        currentNode.kill();
    }
    return currentNode.next.num;
}


console.log(findTheWinner(6, 5))