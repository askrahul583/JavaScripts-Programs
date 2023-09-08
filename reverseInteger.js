function reverseInteger(num) {
  let numStr = num.toString();
  numStr = numStr.split("").reverse().join("");

  return parseInt(numStr) * Math.sign(num);
}

console.log(reverseInteger(-900));
