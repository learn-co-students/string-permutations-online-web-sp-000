
//function factorialize(n){
//  return (n != 1) ? n * factorialize(n - 1) : 1;
//}
//var stringleng;
//var charsRem = 'a'

function findAllPermutations(str){
  let perms = [];
  let permsOfRem = [];
  if(str.length === 'undefined' || str.length === 1){
    console.log(str);
    return str;
  }else{
      for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        let charsRem = str.substring(0,i) + str.substring(i+1);
        let permsOfRem = findAllPermutations(charsRem);
        //let letter;
        for(let j=0;j<permsOfRem.length;j++){
          perms.push(currentChar + permsOfRem[j]);
        }
       }
    }
      console.log(perms);
      return perms;
}
