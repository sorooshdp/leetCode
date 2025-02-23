pub struct Solution;
use std::collections::HashMap;

impl Solution {
    pub fn word_pattern(pattern: String, s: String) -> bool {
        if s.split_whitespace().count() != pattern.len() {
            return false;
        }
        let mut seen = HashMap::new();
        let mut words = s.split_whitespace(); 

        for c in pattern.chars() {
            let word = words.next().unwrap();
            let prev = seen.get(&c);

            if prev == None {
                if seen.values().any(|&v| v == word) {
                    return false;
                }
                seen.insert(c, word);
            } else if prev != Some(&word) {
                return false;
            }
        }

        true
    }
}