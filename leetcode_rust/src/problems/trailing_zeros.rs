pub struct Solution;

impl Solution {
    pub fn trailing_zeroes(n: i32) -> i32 {
        let mut res = 1;
        let mut count = 0;

        for i in (2..= n).rev() {
            res *= i;
        } 

        for c in res.to_string().chars().rev() {
            if c != '0' {
                break;
            } else {
                count += 1;
            }
        }

        count
    }
}