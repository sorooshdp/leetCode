pub struct Solution;
use std::collections::HashMap;

impl Solution {
    pub fn single_number_two(nums: Vec<i32>) -> i32 {
        let mut map = HashMap::with_capacity(32);
        let mut res = 0;
        for i in 0..32 {
           for num in &nums {
               if num & (1 << i) != 0 {
                   map.entry(i).or_insert(vec![]).push(*num);
               }
           } 
        }

        for (k, v) in map {
            if v.len() % 3 != 0 {
                res |= 1 << k;
            }
        }
        
        res
    }
}