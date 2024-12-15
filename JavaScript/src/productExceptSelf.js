/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    let answer = [];
    for (let i = 0; i <nums.length ; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if(j !== i){
                product = nums[j] * product;
            }
        }

        answer.push(product);
    }

    return answer;
};

/*const productExceptSelf = function(nums) {
    const result = [];
    let productSoFar = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = productSoFar
        productSoFar *= nums[i]
    }
    productSoFar = 1
    for (let j = nums.length-1; j >= 0; j--) {
        result[j] *= productSoFar
        productSoFar *= nums[j]
    }
    return result;
};*/

console.log(productExceptSelf( [-1,1,0,-3,3]));