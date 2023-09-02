/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    const altitudes = [0];
    let start = 0;
    gain.forEach(altitude => {
        start += altitude;
        altitudes.push(start)
    })

    return Math.max(...altitudes);
};