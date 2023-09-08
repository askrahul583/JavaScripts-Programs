function count_Pairs(arr, X) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    //console.log(num);
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[j] + arr[i] === X) {
        count++;
      }
    }
  }
  return count;
}

//const result = count_Pairs([1, 2, 3, 2, 1], 5);
const result = count_Pairs([1, 1, 1], 2);
console.log(result);
