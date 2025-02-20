fn search_insert_safe(nums: Vec<i32>, target: i32) -> i32 {
    let mut left = 0;
    let mut right = nums.len() as i32 - 1;
    
    println!("Initial state: left = {}, right = {}, target = {}", left, right, target);
    println!("Array: {:?}", nums);
    
    while left <= right {
        let mid = left + (right - left) / 2;
        
        println!("\nStep:");
        println!("  left = {}, right = {}, mid = {}", left, right, mid);
        println!("  nums[mid] = {}", nums[mid as usize]);
        
        if nums[mid as usize] == target {
            println!("  Target found at index {}", mid);
            return mid;
        } else if nums[mid as usize] < target {
            println!("  nums[mid] < target, searching right half");
            left = mid + 1;
        } else {
            println!("  nums[mid] > target, searching left half");
            right = mid - 1;
        }
        
        println!("  New bounds: left = {}, right = {}", left, right);
    }
    
    println!("\nTarget not found, insertion point: {}", left);
    left
}

fn main() {
    let test_cases = vec![
        (vec![1, 3, 5, 6], 5),
        (vec![1, 3, 5, 6], 2),
        (vec![1, 3, 5, 6], 0),
    ];
    
    for (nums, target) in test_cases {
        println!("=========================================");
        println!("Testing nums = {:?}, target = {}", nums, target);
        let result = search_insert_safe(nums.clone(), target);
        println!("Result: {}\n", result);
    }
}