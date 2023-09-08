function reverseStrForLoop(str) {
  let reverseArr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseArr += str[i];
  }
  console.log(reverseArr);
}

reverseStrForLoop("Rohan");

function reverseStrReverseFn(str) {
  let reservedStr = str.split("").reverse().join("");
  console.log(reservedStr);
}

reverseStrReverseFn("raushan!");

function reverseStrForOfLoop(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
    //console.log(reversed);
  }
  console.log(reversed);
}

reverseStrForOfLoop("kumar");

function reverseStrReduce(str) {
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");

  //   char + reversed;
  // , "");
}

console.log(reverseStrReduce("koyal"));
