function findNumbers(nums: number[]): number {
    
    let evenCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let digitCount = 1;
        while (nums[i] >= 10) {
            digitCount++;
            nums[i] /= 10;
        }
        if (digitCount % 2 === 0) evenCount++;
    }
    return evenCount;
};
