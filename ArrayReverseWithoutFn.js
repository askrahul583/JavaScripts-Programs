let arr = [1, 2, 3, 4, 5];

function reverseArrayWithoutBuiltInFn(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
}

reverseArrayWithoutBuiltInFn(arr);
