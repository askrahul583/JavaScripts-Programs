let str = "India is my Country";

function reverseStringWithoutBuiltInFn(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  console.log(result);
}


reverseStringWithoutBuiltInFn(str)