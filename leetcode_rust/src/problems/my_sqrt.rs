pub struct Solution;

impl Solution {
    pub fn my_sqrt(x: i32) -> i32 {
        if x == 1 || x == 2 {
            return 1;
        }

        let mut i: i64 = 0;
        let x: i64 = x as i64;

        while i <= (x/2) + 1{
            if i * i == x {
                return i as i32;
            } else if i * i > x {
                return (i - 1) as i32;
            }
            i += 1; 
        } 
        
        0
    }
}