pub struct Solution;

impl Solution {
    pub fn add_binary(a: String, b: String) -> String {
        let mut result = String::new();
        let mut carry = 0;
        let mut al = a.len();
        let mut bl = b.len();

        while al > 0 || bl > 0 {
            let mut sum = carry;
            if al > 0 {
                sum += a.chars().nth(al - 1).unwrap() as i32 - '0' as i32;
                al -= 1;
            }
            if bl > 0 {
                sum += b.chars().nth(bl - 1).unwrap() as i32 - '0' as i32;
                bl -= 1;
            }
            result.push((sum % 2 + '0' as i32) as u8 as char);
            carry = sum / 2;
        }

        if carry > 0 {
            result.push('1');
        }

        result.chars().rev().collect()
    }
}
