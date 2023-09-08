let sentence = "india is a great country to live in";

function captalizeFirstLetter(sentence) {
  const captalizeSentence = sentence
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");

  console.log(captalizeSentence);
}

captalizeFirstLetter(sentence);
