use std::collections::HashMap;

pub struct Solution;

impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len() {
            return false;
        }

        let mut map: HashMap<char, u16> = HashMap::new();

        for word in s.chars() {
            *map.entry(word).or_insert(0) += 1;
        }

        for word in t.chars() {
            match map.get_mut(&word) {
                Some(count) if *count > 0 => *count -= 1,
                _ => return false
            }
        }

        true
    }
}
