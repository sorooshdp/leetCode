/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.push(0);
            for (let j = arr.length - 1; j > i; j++) {
                arr[j] = arr[j - 1];
            }
        }
    }
}
