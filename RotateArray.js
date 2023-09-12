function rotate(arr, stepsToShift) {
  for (let i = 0; i < stepsToShift; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

console.log(rotate([1, 2, 5, 6, 7, 8], 3));

