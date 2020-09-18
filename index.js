function findAllPermutations(str){

  if (str.length === 0)
    return str;

  let target = [];
  let strArray = str.split("");

  for (let [i, val] of strArray.entries()){

    const newStr1 = str.substr(0, i);
    const newStr2 = str.substr(i + 1, str.length - 1);

    const newStr4 = newStr1 + newStr2;
    for (let perm of ('' + findAllPermutations(newStr4)).split(',')){
      target.push(val + perm);
    }
  }
  return target;

  // (# of combos starting with same character) * (length of string)
  // next row: prev row multiple, number of characters

  // 1: 1 * 1 1
  // 2: 1 * 2 12, 21
  // 3: 2 * 3 123, 132, 2
  // 4: 6 * 4 1234, 1243, 1324, 1342, 1423, 1432, 2
  // 5: 24 * 5 12345, 12354, 12435, 12453, 12534, 12543, 13, 14, 15, 2
                                                  // 6,   6,  6,  6
}
