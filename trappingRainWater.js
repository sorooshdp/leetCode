// Stack class
class Stack {

    // Array is used to implement stack
    constructor() {
        this.items = [];
    }

    // push function
    push(element) {
        // push element into the items
        this.items.push(element);
    }

    // pop function
    pop() {
        // return top most element in the stack
        // and removes it from the stack
        // Underflow if stack is empty
        if (this.items.length === 0)
            return "Underflow";
        return this.items.pop();
    }

// peek function
    peek() {
        // return the top most element from the stack
        // but doesn't delete it.
        return this.items[this.items.length - 1];
    }

    top() {
        const peek = this.items[this.items.length - 1];

        if (this.items.length === 0)
            return "Underflow";
        this.items.pop();

        return peek
    }

    // isEmpty function
    isEmpty() {
        // return true if stack is empty
        return this.items.length === 0;
    }
}

const trap = function (height) {
    let water = 0;
    const stack = new Stack();
    for (let i = 0; i < height.length; i++) {
        while (!stack.isEmpty() && height[i] > height[stack.peek()]) {
            const top = stack.top();
            if (stack.isEmpty()) {
                break
            }
            let distance = i - stack.peek() - 1;
            let boundedHeight = Math.min(height[i], height[stack.peek()]) - height[top];
            water += boundedHeight * distance;
        }
        stack.push(i);
    }
    return water;
};

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
    let n=height.length;
    let maxLeft=0,maxRight=0,res=0;
    let l=0,r=n-1;
    while(l<=r){
        if(height[l]<=height[r]){
            if(height[l]>=maxLeft) maxLeft=height[l]
            else res+=maxLeft-height[l]
            l++
        }
        else{
            if(height[r]>=maxRight) maxRight=height[r]
            else res+=maxRight-height[r]
            r--
        }
    }
    return res
};

console.log(trap([0,1,0,1]));