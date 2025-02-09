pub struct Solution;

impl Solution {
    pub fn hamming_weight(n: i32) -> i32 {
        (0..32).fold(0, |acc, exp| acc + ((n & (1 << exp)) >> exp)) as i32
    }
}