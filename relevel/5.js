// Write a function to return the alphabet which is repeated the maximum number of times as a single group in a given string.
// For example, consider this string: “quaaabbyyyyaaggggga”
// In the above example, the function should return “y” since it is repeated 4 times as a single group.
// Note that “a” is occuring 6 times in total, but it should be ignored because the requirement is “maximum repeatation as a single group”.

function repeatation(str) {
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
  console.log(repeatation("quaaabbyyyyaagggggggggggggggga"))