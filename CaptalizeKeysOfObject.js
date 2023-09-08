let obj = {
  id: 1,
  name: "Rahul Kumar",
  profession: "UnEmployed",
  age: 25,
  gender: "Male",
};

let newObj = {};
// let keys = Object.keys(obj);

for (let key in obj) {
  newObj[key[0].toUpperCase() + key.slice(1)] = obj[key];
}

console.log(newObj);
