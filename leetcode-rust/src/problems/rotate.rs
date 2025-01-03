pub struct Solution;

impl Solution {
    pub fn rotate(matrix: &mut Vec<Vec<i32>>) {
        let n = matrix.len();
       for edge in 0..n / 2 {
        for col in edge..n - edge - 1{
            let cell = (edge, col);
            let mut dest = (cell.1, n - cell.0 - 1);
            
            while cell != dest {
                let temp = matrix[dest.0][dest.1];
                matrix[dest.0][dest.1] = matrix[cell.0][cell.1];
                matrix[cell.0][cell.1] = temp;
                dest = (dest.1 , n - dest.0 - 1);
            }
        }
       }
    }
}