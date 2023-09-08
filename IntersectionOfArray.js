let arr1 = [1, 3, 4, 6, 7, 8, 9, 11];
let arr2 = [1, 2, 3, 4, 8, 9, 10, 11];

let intersection1 = [...new Set(arr1.filter((ele) => arr2.includes(ele)))];

let intersection2 = arr1.filter((ele) => arr2.includes(ele));

console.log(intersection1);
console.log(intersection2);
