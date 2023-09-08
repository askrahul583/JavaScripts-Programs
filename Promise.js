// function getPromise() {
//   return new Promise((resolve, reject) => {
//     resolve("Promise Resolved Successfully");
//   });
// }
// console.log("Promise Started");

// getPromise().then((result) => {
//   console.log(result);
//   console.log("Promise Ended");
// });

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve("success");
});

promise1.then(() => {
  console.log(3);
});
console.log(4);
