pub struct Solution;

impl Solution {
    pub fn score_of_string(s: String) -> i32 {
        let mut res: i32 = 0;
        for i in 0..s.len() - 1 {
            res += (s.clone().into_bytes()[i] as i32 - s.clone().into_bytes()[i + 1] as i32).abs();
        }

        res
    }
}