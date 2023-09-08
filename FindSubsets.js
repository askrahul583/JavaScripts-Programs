function findAllSubsets(arr) {
  return arr.reduce(
    (acc, curr) => acc.concat(acc.map((item) => [curr, ...item])),
    [[]]
  );
}

console.log(findAllSubsets([1, 2]));
