pub struct Solution;
use std::collections::HashMap;

impl Solution {
    pub fn is_isomorphic(s: String, t: String) -> bool {
        let mut map = HashMap::new(); 
        let s = s.chars();
        let t = t.chars();

        for (k, v) in s.zip(t) {
            if map.get(&k) == None && !map.values().any(|x| x == &v) {
                map.insert(k, v);
            } else {
                if map.get(&k) != Some(&v) {
                    return false;
                }
            }
        }

        true
    }
}