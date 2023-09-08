// String Anagram
// 'hello' --> 'llheo'

// condition 1 --> lenth of both strings should be equal
// condition 2 --> cout of characters should be same
// String 'hello' {h:1,l:2,o:1}

function isAnagram1(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let counter = {};
  for (let letter of str1) {
    counter[letter] = (counter[letter] || 0) + 1;
    //console.log(counter[letter]);
  }
  for (let items of str2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  return true;
}

const result1 = isAnagram1("hello", "llheo");
console.log(result1);

function isAnagram2(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let str1 = a.split("").sort().join("");
  let str2 = b.split("").sort().join("");
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}
const result2 = isAnagram2("hello", "llheo");
console.log(result2);

function Anagram(str1, str2) {
  if (str1.toLowerCase().length === str2.toLowerCase().length) {
    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");

    if (str1 === str2) {
      console.log("Anagram");
    }
  } else {
    console.log("Not Anagram");
  }
}

Anagram("mary", "army");
