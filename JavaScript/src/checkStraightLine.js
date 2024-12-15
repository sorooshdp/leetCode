/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function (coordinates) {
    if (coordinates.length < 2)
        return true

    const [x1, y1] = coordinates[0]
    const [x2, y2] = coordinates[1]
    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i]

        if ((y - y1) * (x2 - x1) !== (x - x1) * (y2 - y1))
            return false
    }

    return true
};

console.log(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]));