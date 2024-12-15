/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    let lastNonZeroFoundAt = 0;

    // Move all the non-zero elements to the beginning of the array
    for (let current = 0; current < nums.length; current++) {
        if (nums[current] !== 0) {
            // Swap the elements
            [nums[lastNonZeroFoundAt], nums[current]] = [nums[current], nums[lastNonZeroFoundAt]];
            lastNonZeroFoundAt++;
        }
    }
 };