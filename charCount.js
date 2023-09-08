function charCount1(str) {
  str = str.toLowerCase();
  let count = {};
  for (let char of str) {
    count[char] ? count[char]++ : (count[char] = 1);
  }
  return count;
}

console.log(charCount1("rahul"));

function charCount2(str) {
  let countCharObj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      countCharObj[char] = ++countCharObj[char] || 1;
    }
  }
  return countCharObj;
}

console.log(charCount2("Raushan Kumar c123"));
