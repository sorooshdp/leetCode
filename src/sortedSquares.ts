function sortedSquares(nums: number[]): number[] {
    return nums
        .map((n) => {
            return n * n;
        })
        .sort((a, b) => a - b);
}
