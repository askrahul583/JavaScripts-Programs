function reverseWordArr(str) {
  let reversesentence = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  return reversesentence.join(" ");
}

console.log(reverseWordArr("welcome to india"));

function reverseEachWords(str) {
  let reverseEachWord = str
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
  return reverseEachWord;
}

console.log(reverseEachWords("welcome to india"));
