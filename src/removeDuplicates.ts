function removeDuplicates(nums: number[]): number {
  const map = new Map();

  for ( let i = 0 ; i < nums.length; i++) {
    if (map.get(nums[i])) {
        nums.splice(i,1);
        i--;
    } else {
        map.set(nums[i], 1);
    }
  }

  return nums.length
};