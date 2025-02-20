pub struct Solution;

impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        let mut l = 0;
        let mut r = nums.len() as i32 - 1;

        while r >= l {
            let m = (r + l)/2;
            if nums[m as usize] == target {
                return m as i32;
            } else if nums[m as usize] < target {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        l as i32
    }
}