/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function (bills) {
    let five = 0;
    let ten = 0;
    let twenty = 0;

    for (let i = 0; i < bills.length; i++) {
       if(bills[i] === 5) {
        five++
       } else if(bills[i] === 10){
        if(five >= 1){
            five--;
            ten++;
        } else return false;
       } else {
        if(five >= 1 && ten >= 1){
            five--;
            ten--;
            twenty++;
        } else if(five >= 3){
            five -= 3;
            twenty++;
        } else return false
       }
    }

    return true
}