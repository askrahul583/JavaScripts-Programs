//mul(2)(3)(); == product = 6

const multiply = function (x) {
  return function (y) {
    return function () {
      return x * y;
    };
  };
};

console.log(multiply(2)(3)());

//  Infinite Currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(3)(4)(7)());
