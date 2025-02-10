pub struct Solution;

impl Solution {
    pub fn range_bitwise_and(left: i32, right: i32) -> i32 {
        let xor = left ^ right; // we find all bits that are different
        let first_different_idx = 32 - xor.leading_zeros(); // leading zeros mean that all previous bits are the same
        let left = left >> first_different_idx; // "cut" the different bits
        left << first_different_idx // restore back
    }
}