// Count of Unique Numbers

// Input Arr = [1,1,2,2,3,4,4,5,6,7,8,8]
// Output --> 8

// Approach 1 ---> Set

function uniqueNumbers(arr) {
  let set = new Set(arr);
  return set.size;
}

const result1 = uniqueNumbers([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
console.log(result1);

// Approach 2 --> conditions
// i=0;j=1
// arr[i] !== arr[j]
// 1. i++
// 2. arr[i] = arr[j]

function countUnique(arr) {
  if (arr.length > 0) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is Empty");
  }
}

const result2 = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
console.log(result2);


let myArray = ['a', 1, 'a', 2, '1'];

let unique = [...new Set(myArray)];

console.log(unique); // unique is ['a', 1, 2, '1']