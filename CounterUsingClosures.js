function counter(num) {
  return function inner() {
    return num++;
  };
}

const counter1 = counter(1);
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());




var counter = (function() {
    var count = 0;
    return function() {
        count++;
        return count;
    }
}());
console.log(counter()); // output: 0
console.log(counter()); // output: 1
console.log(counter()); // output: 2

var add = (function() {
    var counter = 0;
    return function() {
        counter++;
        return counter;
    }
})();

console.log(add()); // output: 1;
console.log(add()); // output: 2;
console.log(add()); // output: 3;
