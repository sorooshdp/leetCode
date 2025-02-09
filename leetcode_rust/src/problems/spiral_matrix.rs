pub struct Solution;

enum Direction {
    Right,
    Down,
    Left,
    Up,
}

impl Solution {
    pub fn spiral_order(matrix: Vec<Vec<i32>>) -> Vec<i32> {
        if matrix.is_empty() || matrix[0].is_empty() {
            return vec![];
        }
        
        let mut output: Vec<i32> = vec![];
        let mut dir: Direction = Direction::Right;
        let mut i = 0;
        let mut j = 0;
        let mut round = 0;

        for _ in 0..matrix.len() * matrix[0].len() {
            output.push(matrix[i][j]);
            match dir {
                Direction::Right => {
                    if j + 1 == matrix[i].len() - round {
                        i = i + 1;
                        dir = Direction::Down;
                    } else {
                        j = j + 1;
                    }
                }
                Direction::Up => {
                    if i == round + 1 {
                        j = j + 1;
                        dir = Direction::Right;
                        round = round + 1;
                    } else {
                        i = i - 1;
                    }
                }
                Direction::Down => {
                    if i + 1 == matrix.len() - round {
                        j = j - 1;
                        dir = Direction::Left;
                    } else {
                        i = i + 1;
                    }
                }
                Direction::Left => {
                    if j == round {
                        i = i - 1;
                        dir = Direction::Up;
                    } else {
                        j = j - 1;
                    }
                }
            }
        }

        output
    }
}
#[cfg(test)]
mod test {

    #[test]
    fn valid_spiral() {}
}
