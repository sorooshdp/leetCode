pub struct Solution;

impl Solution {
    pub fn merge(nums1: &mut Vec<i32>,m: i32, nums2: &mut Vec<i32>, n: i32) {
        let mut m :usize= m as usize;
        let mut n :usize= n as usize;

        for i in (0..n + m).rev() {
            if n == 0 {
                break;
            } else if m == 0 {
                nums1[i] = nums2[n - 1];
                n -= 1;
            } else {
               if nums1[m - 1] < nums2[n - 1] {
                   nums1[i] = nums2[m - 1];
                   m -= 1;
               } else {
                   nums1[i] = nums2[n - 1];
                   n -= 1;
               } 
            }
        }
    } 
}
