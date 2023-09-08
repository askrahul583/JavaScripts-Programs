function minimum_picks(A) {
  let maxEven = [];
  let minOdd = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      maxEven.push(A[i]);
    } else {
      minOdd.push(A[i]);
    }
  }
  maxEven.sort(function (a, b) {
    return a - b;
  });
  minOdd.sort(function (a, b) {
    return a - b;
  });
  console.log(maxEven, minOdd);
  return maxEven[maxEven.length - 1] - minOdd[0];
}

const result = minimum_picks([74, 9, 51, 51, 75, 0, 35, 89, 96, 77]);
console.log(result);
