// write a program to find the LCM of two numbers.

// function LCM(num1,num2){
//     let min=(num1>num2)?num1:num2;
//     while(true){
//         if(min%num1==0 && min%num2==0){
//             console.log(`lcm of ${num1} and ${num2} is : ${min}`)
//             break;
//         }
//     }
//    return min++;
// }
// console.log(LCM(6,8))
// LCM(6,8)
// let num1=6, num2=8
// let min = (num1 > num2) ? num1 : num2;

// // while loop
// while (true) {
//     if (min % num1 == 0 && min % num2 == 0) {
//         console.log(`The LCM of ${num1} and ${num2} is ${min}`);
//         break;
//     }
//     min++;
// }
function remove(str, target) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== target) {
        result += str[i];
      }
    }
    return result;
  }
//   let str="avinash is a good boy it is"
  console.log(remove("avinash is a good boy it is","is"))