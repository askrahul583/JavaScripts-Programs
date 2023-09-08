let input = [2, 3, 4, 7, 11];
let k = 5;

// 11 < 5+4
// count 4




function KthPostiveMissingNumber(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k + count) {
      count++;
    }
  }
  return k + count;
}
