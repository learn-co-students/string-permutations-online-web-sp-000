function findAllPermutations(str) {
    let results = []

    if (typeof str !== "string" || !str) {
        throw Error("Please enter a string");
    } 
    else if (str.length < 2) {return str}

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let remainingChars = str.slice(0,i).concat(str.slice(i+1));

        for (let permutation of findAllPermutations(remainingChars)) {
            results.push(char + permutation)
        }
    }

    return results;

}