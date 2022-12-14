
// Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration
// Hoisting does not allow with let and const 


console.log(test);
var test;
// var is globle level scope so print the value is print 10 times
// let is function level scope so print the value is print 0-9 
for(let i=0; i<10; i++){ 
    // console.log(i)
    setTimeout(()=>{
        console.log(i)
    },1000)
}