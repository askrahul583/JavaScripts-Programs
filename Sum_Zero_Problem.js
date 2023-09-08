// Checking sum zero - problem 1
// [-5,-4,-3,-2,0,2,4,6,8]
// [-4,4] --> Output

// Array should be sorted

function getSumPairZero1(arr) {
  for (let i = 0; i <= arr.length; i++) {
    // for(let number of array)
    let num = arr[i];
    for (j = 1; j <= arr.length; j++)
      if (num + arr[j] === 0) {
        return [num, arr[j]];
      }
  }
}

function getSumPairZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const result1 = getSumPairZero1([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result1);
// Quadratic time complexity

const result2 = getSumPairZero2([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result2);
