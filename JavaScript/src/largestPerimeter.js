/**
 * @param {number[]} nums
 * @return {number}
 */
const largestPerimeter = function(nums) {
    let max = 0;
    nums.sort((a, b) => b - a);

    for (let i = 0; i < nums.length - 2 ; i++) {
        if(arr[i] < arr[i + 1] + arr[i + 2]){
            max = Math.max(max, arr[i] + arr[i + 1] + arr[i + 2]);
            break;
        }   
    }

    return max
};