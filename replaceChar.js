function replaceStr(str) {
  let str1 = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "l") {
      str1 += "*";
    } else {
      str1 += str[i];
    }
  }
  return str1;
}

console.log(replaceStr("hello world"));
console.log("hello world".replaceAll("l", "*"));
