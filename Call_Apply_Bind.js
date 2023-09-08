let obj1 = {
  firstName: "Rahul",
  lastName: "Kumar",
  age: 25,
};

let obj2 = {
  firstName: "Virat",
  lastName: "Kohli",
  age: 34,
};

// function printFullName() {
//   console.log(`${this.firstName} ${this.lastName}`);
// }

// function printCity(city) {
//   console.log(
//     `My Full Name is ${this.firstName} ${this.lastName} and I am from ${city}`
//   );
// }

function printDetails(city, state) {
  console.log(
    `My Full Name is ${this.firstName} ${this.lastName} and I am from ${city}, ${state}`
  );
}
// printFullName.call(obj1);
// printFullName.call(obj2);

// printDetails.call(obj1, "Muzaffarpur", "Bihar");
// printDetails.call(obj2, "Delhi", "New Delhi");

// printDetails.apply(obj1, ["Muzaffarpur", "Bihar"]);
// printDetails.apply(obj2, ["Delhi", "New Delhi"]);

const copyFn = printDetails.bind(obj1);

console.log(copyFn());
