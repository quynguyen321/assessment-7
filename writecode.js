function addToZero(array){

let value = "False"
for (let i = 0; i < array.length; i++) {
  
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = "True"
      } 
    }
  }
}
console.log(value)
}
addToZero([]);
addToZero([1]);
addToZero([1, 2, 3]);
addToZero([1, 2, 3, -2]);


function isUnique(str) {
    return new Set(str).size == str.length;
  }

  console.log(isUnique('monday'));    
  console.log(isUnique('moonday'));



  function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }  

  console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
  console.log(isPangram("I like cats, but not mice"));
  



  function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
  }
  
  
console.log(findLongestWordLength("my name is quy"));

