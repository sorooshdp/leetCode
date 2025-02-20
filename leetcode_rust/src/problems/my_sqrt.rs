pub struct Solution;

impl Solution {
    pub fn my_sqrt(x: i32) -> i32 {
        if x == 1 || x == 2 {
            return 1;
        }
        
        for i in 1..x {
            if i * i == x {
                return i;
            } else if i * i > x {
                return i - 1;
            }
        }

        0
    }
}