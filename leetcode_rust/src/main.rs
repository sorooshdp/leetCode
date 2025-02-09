use leetcode_rust::problems::add_binary::Solution;

fn main() {
    let a = "11".to_string();
    let b = "1".to_string();
    let result = Solution::add_binary(a, b);
    println!("{}", result);
}
