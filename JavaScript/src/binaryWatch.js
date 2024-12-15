function readBinaryWatch(turnedOn) {
    const result = [];
    for (let hour = 0; hour < 12; hour++) {
        for (let minute = 0; minute < 60; minute++) {
            if (countBits(hour) + countBits(minute) === turnedOn) {
                const hourStr = String(hour);
                const minuteStr = String(minute).padStart(2, '0');
                result.push(`${hourStr}:${minuteStr}`);
            }
        }
    }
    return result;
}

function countBits(num) {
    let count = 0;
    while (num > 0) {
        if (num & 1) {
            count++;
        }
        num >>= 1;
    }
    return count;
}

console.log(readBinaryWatch(1))