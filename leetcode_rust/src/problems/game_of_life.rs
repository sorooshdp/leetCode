pub struct Solution;

//Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

impl Solution {
    pub fn game_of_life(board: &mut Vec<Vec<i32>>) {
        if board.is_empty() || board[0].is_empty() {
            return;
        }

        let directions: [(isize, isize); 8] = [
            (-1, -1),
            (-1, 0),
            (-1, 1),
            (0, -1),
            (0, 1),
            (1, -1),
            (1, 0),
            (1, 1),
        ];

        let n = board.len();
        let m = board[0].len();

        let is_valid = |x: isize, y: isize| x >= 0 && x < n as isize && y >= 0 && y < m as isize;

        for i in 0..n {
            for j in 0..m {
                let mut live_neighbors = 0;

                // Calculate live neighbors
                for &(dx, dy) in &directions {
                    let nx = i as isize + dx;
                    let ny = j as isize + dy;

                    if is_valid(nx, ny) && board[nx as usize][ny as usize].abs() == 1 {
                        live_neighbors += 1;
                    }
                }

                // Mark state transitions
                if board[i][j] == 1 && (live_neighbors < 2 || live_neighbors > 3) {
                    board[i][j] = -1; // Alive -> Dead
                } else if board[i][j] == 0 && live_neighbors == 3 {
                    board[i][j] = 2; // Dead -> Alive
                }
            }
        }

        // Finalize states
        for row in board.iter_mut() {
            for cell in row.iter_mut() {
                *cell = match *cell {
                    2 => 1,  // Dead -> Alive
                    -1 => 0, // Alive -> Dead
                    _ => *cell, // No change
                };
            }
        }
    }
}

