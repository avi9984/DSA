// You need to create a javascript function which will accept a string and count the frequency of each alphabets. then print them in descending order like below - 

// a: 20
// k: 9
// d: 4
// l: 3
// g: 1

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

// function characterCount(str){
//     var map={};
//     str.split("").forEach(element => {
//         map[element]=map[element]?map[element]+1:1
     
//     });
//   return map
// }

// const c=characterCount("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

// console.log(c)
// // function sort()

// function mergeStr(str1,str2){
//   let str=[], i=0, j=0;
//   while(i<str1.length && j<str2.length){
//     if(str1[i]>str2[j]){
//       str.push(str2[j])
//       j++
//     }else{
//       str.push(str1[i])
//       i++
//     }
//   }

//   while(i<str1.length){
//     str.push(str1[i])
//     i++
//   }

//   while(j<str2.length){
//     str.push(str2[j])
//     j++
//   }
//   return str;
// }

// // console.log(mergeStr("avi","nash"))

// function mergeSort(str){
//   if(str.length<=1) return str;
  
//   let mid=Math.floor((str.length)/2);
//   let left=mergeSort(str.slice(0,mid));
//   let right=mergeSort(str.slice(mid))
//   return mergeStr(left,right)
// }
// console.log(mergeSort("avinash"))

// function characterCount(str){
//     var map={};
//     str.split("").forEach(element => {
//         map[element]=map[element]?map[element]+1:1
     
//     });
//   return map
// }
// console.log(characterCount("avinash"))