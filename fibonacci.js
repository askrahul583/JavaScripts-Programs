function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

function fibonacci(num) {
  const fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(4));
console.log(fibonacci(6));
