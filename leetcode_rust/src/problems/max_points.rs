use std::collections::HashMap;

pub struct Solution;

impl Solution {
    pub fn max_points(points: Vec<Vec<i32>>) -> i32 {
        let n: usize = points.len();
        if n <= 2 {
            return n as i32;
        }

        let mut max_points = 0;
        
        for i in 0..n {
            let mut slope_count: HashMap<(i64, i64), i32> = HashMap::new();
            let mut duplicates: i32 = 0;
            
            for j in 0..n {
                if i == j { continue; }
                
                if points[i][0] == points[j][0] && points[i][1] == points[j][1] {
                    duplicates += 1;
                    continue;
                }
                
                let dx: i64 = points[j][0] as i64 - points[i][0] as i64;
                let dy: i64 = points[j][1] as i64 - points[i][1] as i64;
                let gcd: i64 = Solution::gcd(dx, dy);
                
                let slope: (i64, i64) = (dy / gcd, dx / gcd);
                *slope_count.entry(slope).or_insert(0) += 1;
            }
            
            let current_max: i32 = slope_count.values().max().unwrap_or(&0) + duplicates + 1;
            max_points = max_points.max(current_max);
        }
        
        max_points
    }

    fn gcd(mut a: i64, mut b: i64) -> i64 {
        a = a.abs();
        b = b.abs();
        
        while b != 0 {
            let temp: i64 = b;
            b = a % b;
            a = temp;
        }
        
        a.max(1)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_valid_sudoku() {
        let v = vec![vec![1, 1], vec![2, 2], vec![3, 3]];
        assert_eq!(Solution::max_points(v), 3);
    }
}
