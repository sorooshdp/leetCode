pub struct Solution;

impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        let sr = s.chars().filter(|c| c.is_alphanumeric()).rev().collect::<String>().to_lowercase(); 
        sr == sr.chars().collect::<String>()
    }
}