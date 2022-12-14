// clearTimeOut()- The program executes block of code after the specified time interval. If stop this function call, then use clearTimeOut() method.

// Syntax- clearTimeOut(intervalID)

// Example 1: Use clearTimeout() Method
let count = 0;
function increaseCount() {
  count += 1;
  console.log(count);
}
let id = setTimeout(increaseCount, 5000);
clearTimeout(id);
console.log("Set Time out stop function");
