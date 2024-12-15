/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let l = m + n - 1;

    while (n > 0 && m > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[l] = nums1[m - 1];
            m--;
        } else {
            nums1[l] = nums2[n - 1];
            n--;
        }
        l--;
    }
    while (n > 0) {
        nums1[l] = nums2[n];
        n--;
        l--;
    }
}
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
