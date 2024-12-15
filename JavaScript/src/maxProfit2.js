/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    const leastPrice = Math.min(...prices);
    const newPrice = prices.splice(prices.indexOf(leastPrice))
    const maxPrice = Math.max(...newPrice);

    return maxPrice - leastPrice;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))