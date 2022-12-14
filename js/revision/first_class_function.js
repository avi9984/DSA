// First-class-function:- Function is used to as an argument to another function called first-class funciton.

function sayHi(){
    return "Hello"
}
function greet(msg, name){
    console.log(msg(), name)
}
greet(sayHi,"Avinash")