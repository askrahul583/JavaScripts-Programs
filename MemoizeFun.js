let sum = 0;

function calcSum(num) {
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

const memoizeFn = (fn) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("Data from Cache");
      return cache[n];
    } else {
      console.log("Calculating For First Time");
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

const efficientFn = memoizeFn(calcSum);

// console.log(efficientFn(5))
console.log(efficientFn(5));
