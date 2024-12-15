/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function (n) {
    let powerOfFour = 1;
    if (n === 1) {
        return true;
    }

    while ( powerOfFour < n ) {
        powerOfFour *= 4;
        if( n === powerOfFour ) {
            return true;
        } else if ( powerOfFour > n ) {
            return false;
        }
    } 
    
    return false
};

