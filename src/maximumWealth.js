/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
  const accountsSum = [];

  for (const wealth of accounts) {
    totalSum = 0;
    for (const money of wealth) {
      totalSum += money;
    }
    accountsSum.push(totalSum);
  }

  return Math.max(...accountsSum);
};
