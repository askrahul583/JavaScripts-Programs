function findSecondLargestNumber(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements";
  }

  let firstMax = arr[0];
  let secondMax = null;

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    
    if (num > firstMax) {
      secondMax = firstMax;
      firstMax = num;
    } else if (num < firstMax && (secondMax === null || num > secondMax)) {
      secondMax = num;
    }
  }

  if (secondMax === null) {
    return "There is no second largest number in the array";
  }

  return secondMax;
}

// Example usage:
const numbers = [5, 2, 9, 8, 7];
const secondLargest = findSecondLargestNumber(numbers);
console.log("The second largest number is:", secondLargest);
