function palindrome(str) {
  let regex = /[\W_]+/g;
  str = str.replace(regex, "").toLowerCase();
  let reverse = str.split("").reverse().join("");
  if (reverse == str) {
    return true;
  } else return false;
}

console.log(palindrome("eye"));
