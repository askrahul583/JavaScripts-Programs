let arrObj = [
  { a: 5 },
  { c: 10 },
  { b: 20, d: 25 },
  { a: 5, b: 20, c: 10, d: 25 },
];

let uniqueObjects = new Set(arrObj.map((obj) => JSON.stringify(obj)));

const uniqueArray = Array.from(uniqueObjects, (jsonString) =>
  JSON.parse(jsonString)
);

console.log(uniqueObjects, uniqueArray);

let arrOfObjects = [
  { a: 5 },
  { a: 5 },
  { c: 10 },
  { b: 20, d: 25 },
  { b: 20, d: 25 },
  { a: 5, b: 20, c: 10, d: 25 },
];

const uniqueArray2 = arrOfObjects.filter((value, index, self) => {
  // Check if the current object has an equal object earlier in the array
  return (
    self.findIndex((obj) => JSON.stringify(obj) === JSON.stringify(value)) ===
    index
  );
});

console.log(uniqueArray2);

let arr = [
  { a: 5 },
  { a: 5 },
  { c: 10 },
  { b: 20, d: 25 },
  { b: 20, d: 25 },
  { a: 5, b: 20, c: 10, d: 25 },
];

// Initialize an empty array to store unique objects
let uniqueArray1 = [];

// Create a map to keep track of seen objects
let seenObjects = new Map();

// Iterate through the original array
for (let obj of arr) {
  // Convert the object to a string to use as a key
  let objString = JSON.stringify(obj);

  // If the object has not been seen before, add it to the uniqueArray and mark it as seen
  if (!seenObjects.has(objString)) {
    seenObjects.set(objString, true);
    uniqueArray1.push(obj);
  }
}

console.log(uniqueArray);
