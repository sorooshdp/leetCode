function checkIfExist(arr: number[]): boolean {
    const seen = new Set();

  for (let num of arr) {
      if (seen.has(num * 2) || (num % 2 === 0 && seen.has(num / 2))) {
          return true;
      }
      seen.add(num);
  }

  return false;
};