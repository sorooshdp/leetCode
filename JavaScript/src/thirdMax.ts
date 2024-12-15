function thirdMax(nums: number[]): number {
    let firstMax = null,
        secondMax = null,
        thirdMax = null;

    for (let num of nums) {
        if (num === firstMax || num === secondMax || num === thirdMax) {
            continue;
        }
        if (firstMax === null || num > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = num;
        } else if (secondMax === null || num > secondMax) {
            thirdMax = secondMax;
            secondMax = num;
        } else if (thirdMax === null || num > thirdMax) {
            thirdMax = num;
        }
    }

    return thirdMax === null ? firstMax : thirdMax;
}
