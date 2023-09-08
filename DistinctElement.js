function distinctElement(input) {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    let num = input[i];
    if (input[i + 1] === num) {
      arr.push(num);
    }
  }

  arr = arr.sort((a, b) => a - b);
  return arr;
}

console.log(distinctElement([4, 4, 7, 8, 8, 9]));
console.log(distinctElement([4, 56, 56, 7, 8, , 9]));
