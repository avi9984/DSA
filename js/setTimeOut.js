// setTimeOut()- setTimeOut() method executes block of code after the specified time. The method executes code only ones
// Syntax - setTimeOut(function, millisecond)

// Example 1: Display a Text Once After 3 Second
// function greet() {
//   console.log("Hello World");
// }
// setTimeout(greet, 3000);
// console.log("This is show first");
// let intervalId=setTimeout(greet,4000);
// console.log("ID:"+intervalId)

// Example 2: Display Time Every 3 Second
// function showTime(){
//     let dataTime=new Date();
//     let time=dataTime.toLocaleTimeString()
//     console.log(time);
//     setTimeout(showTime,3000)
// }
// showTime();

console.log("1")
console.log("2")
let a=setTimeout(() => {
  console.log("3")
}, 3000); 
console.log("4")