function maxChar(str) {
  let count = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char]++;
    }
    // count[char] = count[char] +1 || 1;
    for (let char in count) {
      if (count[char] > max) {
        max = count[char];
        maxChar = char;
      }
    }
  }
  return maxChar;
}

console.log(maxChar("abcccccccd"));
