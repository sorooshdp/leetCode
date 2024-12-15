/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
    if (n < 2) {
        return 0;
      }
    
      // Create a boolean array "isPrime[0..n]" and initialize
      // all entries as true. A value in isPrime[i] will
      // finally be false if i is not a prime, else true.
      const isPrime = new Array(n).fill(true);
    
      // 0 and 1 are not prime numbers
      isPrime[0] = isPrime[1] = false;
    
      // Starting from 2, iterate through all numbers up to sqrt(n)
      // Mark multiples of each prime as non-prime
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
          for (let j = i ** 2; j < n; j += i) {
            isPrime[j] = false;
          }
        }
      }
    
      // Count the number of primes (True values in the array)
      const count = isPrime.filter((prime) => prime).length;
    
      return count;
};

countPrimes(5000);