function moveZerosToLeft(arr) {
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++; // 1
    } else if (zeroCount > 0) {
      arr[i - zeroCount] = arr[i];
      arr[i] = 0;
    }
  }
  console.log(arr);
}

moveZerosToLeft([2, 0, 4, 1, 0, 5, 0, 3]);

function moveZerosToLeftUsingFilter(arr) {
  const moveZerosToLeftArr = [
    ...arr.filter((ar) => ar !== 0),
    ...arr.filter((ar) => ar === 0),
  ];

  console.log(moveZerosToLeftArr);
}

moveZerosToLeftUsingFilter([2, 0, 4, 1, 0, 5, 0, 3]);
