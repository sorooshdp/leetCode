function rot13(str) {
  let letters = str.split("");
  let regex = /[\W_]+/g;
  let result = "";

  for (let i = 0; i < letters.length; i++) {
    if (!regex.test(letters[i])) {
      let ascii = letters[i].charCodeAt(0);
      if (ascii - 13 < 65) {
        ascii = (ascii + 26) - 13;
      } else ascii = ascii - 13;

      result += String.fromCharCode(ascii);
    }
    else result += letters[i];
  }

  return result;
}

console.log(rot13("SERR PBQR PNZC"));
