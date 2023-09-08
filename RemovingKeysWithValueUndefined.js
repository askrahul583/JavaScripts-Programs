const data = {
  name: "John",
  age: undefined,
  address: {
    city: "New York",
    state: undefined,
  },
  hobbies: ["reading", undefined, "traveling"],
};

//  Method 1

for (let key in data) {
  if (data[key] === undefined) {
    delete data[key];
  }
}

console.log(data);

// Method 2

const removeUndefinedValuesFromObject = (obj) => {
  Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key]);
  return obj;
};
const cleanData = removeUndefinedValuesFromObject(data);
console.log(cleanData);


// Mehod 3

const cleanData1 = Object.entries(data)
  .filter(([key, value]) => value !== undefined)
  .reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});

console.log(cleanData1);