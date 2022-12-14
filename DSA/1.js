
// function thousandSeparator(n) {
//     let str = n.toString();
//     let result = [], count = 0;
//     for (let i = str.length - 1; i >= 0; i--) {
//         result.unshift(str[i]);
//         count++;
//         if (count === 3 && i !== 0) {
//             result.unshift(".");
//             count = 0;
//         }
//     }
//     return result.join("");
// }
// console.log(thousandSeparator(1234))

// function maxsum(arr){
//     var sum = 0;
//     var maxSum = 0;
//     for(var i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//         if(sum < 0){
//             sum = 0;
//         }
//         if(maxSum < sum){
//             maxSum = sum;
//         }
//     }
//     return maxSum;
// }
// console.log(maxsum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))



function rodsCutting(n, r, memo = {}) {
    if (r === 1) return 1;
    if (n === 0) return 0;
    const key = `${n}-${r}`;
    if (memo[key]) return memo[key];
    let total = 1;
    for (let i = 0; i < n; i++) {
      total += rodsCutting(n - i, r - 1, memo);
    }
    memo[key] = total;
    return total;
  }
  console.log(rodsCutting(2,3))