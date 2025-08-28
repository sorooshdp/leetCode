use std::collections::HashSet;

pub struct Solution;

impl Solution {
    pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
        let num_set: HashSet<i32> = nums.into_iter().collect();
        let mut best = 0;
        print!("{:?}", num_set);

        for &num in &num_set {
            let prev = num - 1;
            if !num_set.contains(&prev) {
               let mut curr = num; 
               let mut count = 1;

               while num_set.contains(&(curr + 1)) {
                  count = count + 1; 
                  curr = curr + 1;
               }

               best = best.max(count);
            }
        }

        println!("{}", best);
        best
    }
}
