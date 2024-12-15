function findMaxConsecutiveOnes(nums: number[]): number {
    let maxConsecutive = 0;
    let currentConsecutive = 0;
    
    for (const num of nums) {
        if (num === 1) {
            currentConsecutive += 1;
            maxConsecutive = Math.max(maxConsecutive, currentConsecutive);
        } else {
            currentConsecutive = 0;
        }
    }
    
    return maxConsecutive;
}
