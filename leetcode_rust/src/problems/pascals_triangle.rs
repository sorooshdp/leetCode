pub struct Solution;

impl Solution {
    pub fn generate(num_rows: i32) -> Vec<Vec<i32>> {
        let mut out = Vec::with_capacity(5);
        let num_rows: usize = num_rows as usize;

        for i in 1..=num_rows {
            let mut temp = Vec::with_capacity(i as usize);
            for j in 1..=i {
                if j == 1 || j == i {
                    temp.push(1);
                } else {
                    let prev_list: &Vec<i32> = out.last().unwrap();
                    let first_prev = prev_list[j - 2];
                    let second_prev = prev_list[j - 1];
                    let sum: i32 = first_prev + second_prev;
                    temp.push(sum);
                }
            }
            out.push(temp);
        }

        out
    }

    pub fn get_row(row_index: i32) -> Vec<i32> {
        let mut last_row = Vec::from([1, 1]);
        let row_index: usize = row_index as usize;

        let res = match row_index {
            0 => return vec![1],
            1 => return last_row,
            _ => {
                for i in 1..=row_index {
                    let mut temp = Vec::with_capacity(i + 1);
                    temp.push(1);
                    for j in 1..=i {
                        if j != 1 && i != 1 {
                            temp.push(last_row[j - 1] + last_row[j - 2]);
                        }
                    }
                    temp.push(1);
                    last_row = temp;
                }
                last_row
            }
        };

        res
    }
}
