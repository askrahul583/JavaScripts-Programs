let input = "{{([])}}";
let stack = [];

// let map = {
//   "{": "}",
//   "[": "]",
//   "(": ")",
// };

// console.log(map["]"]);
function checkValidParantheses(input) {
  for (let i = 0; i < input.length; i++) {
    let char = stack[stack.length - 1];
    console.log(char);
    if (input[i] === "{" || input[i] === "[" || input[i] === "(") {
      stack.push(input[i]);
    } else if (
      (char === "(" && input[i] === ")") ||
      (char === "{" && input[i] === "}") ||
      (char === "[" && input[i] === "]")
    ) {
      stack.pop();
    } else return false;
  }
  return stack.length ? false : true;
}

console.log(checkValidParantheses(input));
// console.log(stack);

const map = new Map([
  ["{", "}"],
  ["(", ")"],
  ["[", "]"],
]);

var isValid = function (s) {
  const stack = [];

  for (let bracket of s) {
    if (map.get(bracket)) {
      stack.push(bracket);
    } else {
      const b = stack.pop();

      if (map.get(b) !== bracket) return false;
    }
  }

  return stack.length === 0;
};
