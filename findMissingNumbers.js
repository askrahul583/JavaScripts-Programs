function findMissingNumbers(arr) {
  const expectedRange = Array.from({ length: 10 }, (_, i) => i + 1); // Create an array with numbers 1 to 10
  const missingNumbers = [];

  for (let i = 0; i < expectedRange.length; i++) {
    if (!arr.includes(expectedRange[i])) {
      missingNumbers.push(expectedRange[i]);
    }
  }

  return missingNumbers;
}

// Example usage:
const integerArray = [1, 2, 4, 7, 9];
const missingNumbers = findMissingNumbers(integerArray);
console.log(`The missing numbers are: ${missingNumbers.join(", ")}`);
