let arr = [2, 7, 8, 11, 15];
let target1 = 9;
let target2 = 26;

// Method 1
function twoSum1(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

const res1 = twoSum1(arr, target1);
const res2 = twoSum1(arr, target2);

console.log(res1, res2);

// Method 2 using objects

function twoSum2(arr, target) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];

    if (diff in obj) {
      return [obj[diff], i];
    } else {
      obj[arr[i]] = i;
    }
  }
}

console.log(twoSum2(arr, target1));
console.log(twoSum2(arr, target2));
