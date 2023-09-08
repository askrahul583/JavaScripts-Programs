let arr = [1, 2, 5];

function missingElement() {
  var a = [1, 2, 5];
  var missing = [];
  for (var i = 1; i <= a[a.length - 1]; i++) {
    // console.log(a.indexOf(i));
    if (a.indexOf(i) == -1) {
      missing.push(i);
    }
  }
  //    console.log(missing) //missing array
  console.log(a.concat(missing).sort()); //actual+missing elements
}
missingElement();
