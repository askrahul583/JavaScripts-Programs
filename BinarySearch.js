let input1 = [-3, -2, -1, 1, 2, 4, 6, 7, 10];
let input2 = [-4, -2, -1, 0, 3, 5, 6, 8, 9];

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch(input1, 4));
console.log(binarySearch(input2, -2));
