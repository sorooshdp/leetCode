use std::{collections::HashSet, cmp::Ordering};

pub struct Solution; 

impl Solution {
    pub fn three_sum(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut res = HashSet::new(); 
        nums.sort();

        for i in 0..nums.len() {
            let mut j = i + 1;
            let mut k = nums.len() - 1;

            while j < k {
                let sum = nums[i] + nums[j] + nums[k];
                match sum.cmp(&0) {
                    Ordering::Less => j += 1,
                    Ordering::Greater => k -= 1,
                    Ordering::Equal => {
                        res.insert(vec![nums[i], nums[j], nums[k]]);
                        j += 1;
                        k -= 1;
                    }
                }
            }
        }

        res.into_iter().collect()
    }
}