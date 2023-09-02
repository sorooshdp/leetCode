function removeKDigits(num, k) {
    const stack = [];
  
    for (let i = 0; i < num.length; i++) {
      const currentDigit = num[i];
  
      // Remove larger digits from the stack until a smaller digit is encountered or k becomes 0
      while (k > 0 && stack.length > 0 && stack[stack.length - 1] > currentDigit) {
        stack.pop();
        k--;
      }
  
      stack.push(currentDigit);
    }
  
    // If k is still greater than 0, remove the remaining largest digits from the end
    while (k > 0) {
      stack.pop();
      k--;
    }
  
    // Construct the smallest possible integer from the remaining digits
    let result = stack.join('').replace(/^0+/, ''); // Remove leading zeros
    if (result === '') {
      result = '0'; // If the result is an empty string, return '0'
    }
  
    return result;
  }
  
  // Example usage
  console.log(removeKDigits("1432219", 3)); // Output: "1219"
  console.log(removeKDigits("10200", 1)); // Output: "200"
  console.log(removeKDigits("10", 2)); // Output: "0"