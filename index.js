let findAllPermutations = (string) => {
  // split the string to an array of letters
  let letters = string.split('')

  // if there is only one letter return it
  if (letters.length === 1) return letters

  // otherwise we need to find the permutations
  let permutations = []

  for (var i = 0; i < string.length; i++) {
    // get one letter
    let letter = string[i];
    // get the remaining string
    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);

    // find the permuation of the remaining string
    for (var subPermutation of findAllPermutations(remainingString))
      // add the the letter to all the permutations and push it to the master list
      permutations.push(letter + subPermutation)
  }
  return permutations
}
