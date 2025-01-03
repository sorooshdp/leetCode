pub struct Solution;

impl Solution {
    pub fn set_zeroes(matrix: &mut Vec<Vec<i32>>) {
        let mut c_zeros: Vec<usize> = Vec::new();
        let mut r_zeros: Vec<usize> = Vec::new(); 

        for i in 0..matrix.len() {
            for j in 0..matrix[0].len()  {
                if matrix[i][j] == 0 {
                    c_zeros.push(j);
                    r_zeros.push(i);
                }
            } 
        }

        for i in 0..matrix.len() {
            for j in 0..matrix[0].len()  {
                if ( c_zeros.contains(&j) || r_zeros.contains(&i) ) && matrix[i][j] != 0 {
                    matrix[i][j] = 0;
                }
            } 
        }
    }
}