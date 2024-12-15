pub struct Solution;

impl Solution {
    pub fn solve_n_queens(n: i32) -> Vec<Vec<String>> {
        // Function to check if a queen can be placed at (row, col)
        fn is_valid(board: &Vec<Vec<char>>, row: usize, col: usize, n: usize) -> bool {
            // Check for same column conflicts
            for i in 0..row {
                if board[i][col] == 'Q' {
                    return false;
                }
            }
            
            // Check for upper-left diagonal conflicts
            let mut i = row as isize;
            let mut j = col as isize;
            while i >= 0 && j >= 0 {
                if board[i as usize][j as usize] == 'Q' {
                    return false;
                }
                i -= 1;
                j -= 1;
            }
            
            // Check for upper-right diagonal conflicts
            i = row as isize;
            j = col as isize;
            while i >= 0 && j < n as isize {
                if board[i as usize][j as usize] == 'Q' {
                    return false;
                }
                i -= 1;
                j += 1;
            }
            
            true
        }

        // Backtracking function to place queens
        fn backtrack(
            board: &mut Vec<Vec<char>>,
            row: usize,
            n: usize,
            result: &mut Vec<Vec<String>>,
        ) {
            if row == n {
                // We have placed queens in all rows, so we add this configuration to the result
                let solution = board
                    .iter()
                    .map(|row| row.iter().collect::<String>())
                    .collect::<Vec<String>>();
                result.push(solution);
                return;
            }
            
            for col in 0..n {
                if is_valid(board, row, col, n) {
                    board[row][col] = 'Q'; // Place queen
                    backtrack(board, row + 1, n, result); // Recurse for the next row
                    board[row][col] = '.'; // Backtrack and remove the queen
                }
            }
        }

        // Initialize the board
        let mut board = vec![vec!['.'; n as usize]; n as usize];
        let mut result = vec![];
        
        // Start the backtracking from the first row
        backtrack(&mut board, 0, n as usize, &mut result);
        
        result
    }
}
