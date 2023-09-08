function largestDistinct(input1, input2) {
  let str = "";
  input2 = input2.split(" ").join("").trim();
  console.log(input2);
  for (let ch of input2) {
    if (ch === input1) {
      str = input2.substring(input2.indexOf(ch), input2.length - 1);
    }
  }
  str = [...new Set(str.split(""))];
  return str.length;
}

console.log(largestDistinct("a", "my name is grana"));
