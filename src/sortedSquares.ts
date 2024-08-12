// function sortedSquares(nums: number[]): number[] {
//     return nums
//         .map((n) => {
//             return n * n;
//         })
//         .sort((a, b) => a - b);
// }
function sortedSquares(nums: number[]): number[] {
    const n = nums.length;
    const result: number[] = new Array(n);
    let left = 0;
    let right = n - 1;
    let position = n - 1;

    while (left <= right) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            result[position] = leftSquare;
            left++;
        } else {
            result[position] = rightSquare;
            right--;
        }
        position--;
    }

    return result;
}