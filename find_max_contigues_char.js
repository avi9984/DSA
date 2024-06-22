
function maxContiguesChar(str) {
    let maxCount = 0;
     let maxLetter = "";
     let i = 0;
     while (i < str.length) {
       let letter = str[i];
       let count = 0;
       while (i < str.length && str[i] === letter) {
         count++;
         i++;
       }
       if (count > maxCount) {
         maxCount = count;
         maxLetter = letter;
       }
     }
     return maxLetter;
  }
  console.log(maxContiguesChar("aabbccccccccccaaddddaaa"))