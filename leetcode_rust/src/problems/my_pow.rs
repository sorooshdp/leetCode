pub struct Solution;

impl Solution {
    pub fn my_pow(mut x: f64, n: i32) -> f64 {
        if n == 0 {
            return 1.0;
        }

        let mut n = n as i64;
        let mut res = 1.0;

        if n < 0 {
            n = -n;
            x = 1f64 / x;
        }

        while n > 0 {
            if n % 2 == 1 {
                res *= x;
            }

            x *= x;
            n /= 2;
        }
        res
    }
}