pub struct Solution;

impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        let needle_len = needle.len();
        let haystack_len = haystack.len();

        if needle_len > haystack_len {
            return -1;
        }

        for i in 0..(haystack_len - needle_len + 1) {
            if haystack[i..i + needle_len] == needle {
                return i as i32;
            }
        }

        -1
    }
}