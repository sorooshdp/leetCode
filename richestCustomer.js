/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let iWealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
           iWealth += accounts[i][j];
        }
        if (iWealth > maxWealth) {
            maxWealth = iWealth;
        }
    }
    return maxWealth;
};