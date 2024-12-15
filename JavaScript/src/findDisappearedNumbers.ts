function findDisappearedNumbers(nums: number[]): number[] {
    const n = nums.length;

// Step 1: Mark positions in the array as negative
for (let i = 0; i < n; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
        nums[index] = -nums[index];
    }
}

// Step 2: Collect indices of positive numbers
const result: number[] = [];
for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
        result.push(i + 1);
    }
}

return result;
};