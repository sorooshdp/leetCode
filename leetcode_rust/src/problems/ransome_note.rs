//use std::collections;

pub struct Solution;

impl Solution {
    pub fn can_construct(ransom_note: String, magazine: String) -> bool {
    //     let mut map = collections::HashMap::new();

    //     for c in magazine.chars(){
    //         map.entry(c).and_modify(|count| *count += 1).or_insert(1);
    //     }

    //     for c in ransom_note.chars() {
    //         match map.get_mut(&c) {
    //             Some(n) if *n > 0 => { *n -= 1; }
    //             _ => return false
    //         }
    //     }

    //    true 
        let mut char_count = [0; 26];
        
        for c in magazine.chars() {
            char_count[c as usize - 'a' as usize] += 1;
        }
        
        for c in ransom_note.chars() {
            let count = &mut char_count[c as usize - 'a' as usize];
            if *count == 0 {
                return false;
            }
            *count -= 1;
        }
        
        true
    }
}