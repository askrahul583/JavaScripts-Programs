let str = "abbaccedd";

function getUniqueCharacter(str) {
  for (let ch of str) {
    if (str.indexOf(ch) === str.lastIndexOf(ch)) {
      console.log(ch);
    }
  }
}

getUniqueCharacter(str);
