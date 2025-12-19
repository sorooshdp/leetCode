pub struct Solution;

impl Solution {
    pub fn is_happy(n: i32) -> bool {
        let mut digits = n.to_string();
        let mut v = Vec::new();
        let mut sum;

        while !digits.eq("1") {
            sum = 0;
            for digit in digits.chars() {
                let d_sqrt = match digit.to_digit(10) {
                    Some(n) => n.pow(2),
                    None => 0,
                };
                sum += d_sqrt;
            }

            if v.contains(&sum) {
                return false;
            } else {
                v.push(sum)
            };
            digits = sum.to_string();
        }

        true
    }
}
