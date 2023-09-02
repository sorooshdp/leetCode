/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let max = 0, right = 1, left = 0;

    while (left < prices.length) {
        if (prices[right] > prices[left]) {
            if (prices[right] - prices[left] > max)
                max = prices[right] - prices[left];
        } else {
            left = right
        }

        right++
    }

    return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))