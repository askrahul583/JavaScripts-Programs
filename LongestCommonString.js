function longestCommonString() {
  let array = ["go", "google", "gosh"];
  var arr = array.sort((a, b) => a.length - b.length);
  console.log(arr[0])
  let result = "";
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0][i] === arr[arr.length - 1][i]) {
      result += arr[0][i];
    }
  }
  return result;
}
console.log(longestCommonString());
