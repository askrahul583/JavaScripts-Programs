let count = 0;

function myFun() {
  console.log("Fetching Data " + count++);
}

function deBounce(fn, delay) {
  return function (...args) {
    let timer;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

const myDebounce = deBounce(myFun, 100);

myDebounce();
