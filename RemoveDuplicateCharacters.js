let str = "priya riya supriya";

// Method 1
function removeDuplicateCharactersFromString(str) {
  let arrStr = str.split("");
  let uniqueCharacters = arrStr.filter((ch, index, arr) => {
    return arr.indexOf(ch) === index;
  });
  console.log(uniqueCharacters.toString());
}

removeDuplicateCharactersFromString(str);

// Method 2

const removeDuplicateCharacters = (str) => {
  let unique = [];
  for (let ch of str) {
    if (!unique.includes(ch)) {
      unique.push(ch);
    }
  }
  console.log(unique.toString());
};

removeDuplicateCharacters(str);

// Method 3

let uniqueChars = [...new Set(str)];

console.log(uniqueChars.toString());
