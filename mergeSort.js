const mergeSort = function (array) {
    if (array.length <= 1) {
        return array
    }

    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

const merge = function (left, right) {
    const arr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    return arr.concat(left.slice()).concat(right.slice())
}
(function test() {
    const testArr = [1, 2, 7, 8, 6, 6, 43, 3, 486],
        testArr2 = [1],
        testArr3 = [1, 2, 56, 6, 5465, 8, 46, 4, 68, 76]

    console.log(mergeSort(testArr))
    console.log(mergeSort(testArr2))
    console.log(mergeSort(testArr3))
})
