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
     for(let permutation of findAllPermutations(remainingChars))
     {
       permutationArr.push(char + permutation)
     }
   }
   
  }
return permutationArr
}
