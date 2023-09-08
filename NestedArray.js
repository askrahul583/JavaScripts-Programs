let arr = [
  [1, 2, 3],
  [4, [5, 6], 7, [8, [9], 10]],
];

// Method 1 Inbuilt method

console.log(arr.flat(Infinity));

// Method 2 using normal Approach

let flatArr = [];
function flatArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray(arr[i]);
    } else {
      flatArr.push(arr[i]);
    }
  }
  console.log(flatArr);
}

flatArray(arr);

// Method 3

function flatAr(arr) {
  let result = arr.reduce((acc, item) => {
    Array.isArray(item) ? acc.push(...flatAr(item)) : acc.push(item);
    return acc;
  }, []);
  console.log(result);
}
