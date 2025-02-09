pub struct Solution;

impl Solution {
    pub fn is_subsequence(s: String, t: String) -> bool {
        // let mut i = 0;

        // if s.len() == 0 {
        //     return true;
        // }

        // for c in t.chars() {
        //     if c == s.chars().nth(i).unwrap_or(' ') {
        //         i += 1;
        //     }
        //     if i == s.len() {
        //         return true;
        //     }
        // }

        // false
        let mut t_iter = t.chars();

        s.chars().all(|char_s| {
            t_iter.find(|&char_t| char_t == char_s).is_some()
        })
    }
}