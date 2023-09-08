const arr = [-2, 3, -1, 0, 4, 0, 0];

const zero = 0;
const result1 = [
  arr.filter((el) => el !== zero).sort((a, b) => a - b),
  arr.filter((el) => el === zero),
].flat();

const zeroNum = arr.filter((el) => el === zero); //.sort((a,b)=>a-b);
const NUM = arr.filter((el) => el !== zero); //.sort((a,b)=>a-b);
const result = [...NUM, ...zeroNum];
console.log(result);
