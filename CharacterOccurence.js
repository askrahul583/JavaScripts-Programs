function characterOccurence(str, letter) {
  let count = 0;
  for (let ch of str.toLowerCase()) {
    if (ch === letter) {
      count++;
    }
  }

  console.log(count);
}

characterOccurence("Philiphines", "i");
