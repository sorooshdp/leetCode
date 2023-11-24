/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let profit = 0;
    for (let i = 0, j = 1; j < prices.length; i++, j++) {
        if (prices[j] - prices[i] > 0) {
            profit += prices[j] - prices[i];
        }
    }

    return profit;
};