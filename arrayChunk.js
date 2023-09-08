function chunk1(arr, size) {
  let chunked = [];
  for (let ele of arr) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([ele]);
    } else {
      last.push(ele);
    }
  }
  return chunked;
}

console.log(chunk1([1, 2, 3, 4, 5], 2));

function chunk2(arr, size) {
  let chunked = [];
  let index = 0;
  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }
  return chunked;
}

console.log(chunk2([1, 2, 3, 4, 5], 3));
