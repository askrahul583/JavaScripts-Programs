let arr = [1, 2, 0, -1, -3, 4, -2, 3, 6, -5, 5];

const negativePositive = [
  arr.filter((ar) => ar < 0),
  arr.filter((ar) => ar > 0),
]
  .flat(1)
  .sort((a, b) => a - b);

console.log(negativePositive);
