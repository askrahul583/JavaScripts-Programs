function getSmallestAndLargest(str, k) {
  let arr1 = [];
  let arr2 = [];
  let smallest = "";
  let largest = "";
  for (let i = 0; i < str.length; i++) {
    arr1.push(str.substring(i, i + k));
    arr2 = arr1.filter((ar) => {
      return ar.length >= 3;
    });
  }
  arr2.sort();
  smallest = arr2[0];
  largest = arr2[arr2.length - 1];
  console.log(smallest, largest);
}

getSmallestAndLargest("rahul", 3);
