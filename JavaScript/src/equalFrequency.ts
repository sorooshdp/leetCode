function equalFrequency(word: string): boolean {
  const map = new Map<string, number>();

  for (const char of word) {
    const count = map.get(char);

    if (count !== undefined) {
      map.set(char, count + 1);
    } else {
      map.set(char, 1);
    }
  }

  const values = Array.from(map.values());

  for (let i = 0; i < values.length; i++) {
    values[i]--;
    if (values[i] === 0) {
      values.splice(i, 1);
      if (values.every((val) => val === values[0])) {
        return true;
      }
      values.splice(i, 0, 1);
    } else {
      if (values.every((val) => val === values[0])) {
        return true;
      }
      values[i]++;
    }
  }

  return false;
}

const word = "abcc";
console.log(equalFrequency(word));
