let sentence = "supriya is a masooooom good girl";

// Method 1
function longestWord1(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log(longestWord);
}

longestWord1(sentence);

function findLongestWord() {
  var str = "Priya is a goog girl and having hardworking skill";
  var longestWord = str.split(" ").sort((a, b) => {
    return b.length - a.length;
  }); //in desc order //from greater to smallest word
  console.log(longestWord[0]);
  console.log(longestWord[0].length);
}
findLongestWord();
