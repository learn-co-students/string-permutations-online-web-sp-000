function findAllPermutations(string)
{
  let permutationArr = [];
  if(string.length < 2)
  {
    return string
  }
  else
  {
   for(let i = 0; i < string.length; i++)
   {
     let char = string[i]
     let remainingChars = string.slice(0, i) + string.slice(i + 1)
     let permutation = findAllPermutations(remainingChars)
     for(let j = 0; j < permutation.length; j++)
     {
       permutationArr.push(char + permutation[j])
     }
   }
   
  }
return permutationArr
}
