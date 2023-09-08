function checkAnaram(str1, str2) {
  if (str1.length !== str2.length) return false;
  else {
    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < str1.length; i++) {
      obj1[str1[i]] ? obj1[str1[i]]++ : (obj1[str1[i]] = 1);
      obj2[str1[i]] ? obj2[str1[i]]++ : (obj2[str1[i]] = 1);
    }

    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) return false;
    }
    return true;
  }
}

console.log(checkAnaram("anagram", "naagram"));
