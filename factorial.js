function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result = result * i;
  }
  return result;
}


console.log(factorial(5))
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(6))