function palindrome1(str) {
  let reversedStr = str.split("").reverse().join("");
  const result = str === reversedStr ? true : false;
  return result;
}

console.log(palindrome1("aba"));
 
// Method 2 
function palindrome2(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}


console.log(palindrome2("madam"));
