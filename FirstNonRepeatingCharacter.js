function findFirstNonRepeatingCharacter(str) {
  const charCount = {}; // Object to store character frequencies

  // Count the frequency of each character in the string
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeating character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Return null if no non-repeating character is found
  return null;
}

// Example usage:
const inputString = "leetcode";
const firstNonRepeatingChar = findFirstNonRepeatingCharacter(inputString);

if (firstNonRepeatingChar !== null) {
  console.log(`The first non-repeating character is: ${firstNonRepeatingChar}`);
} else {
  console.log("No non-repeating character found in the string.");
}
