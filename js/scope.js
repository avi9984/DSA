// Scope:- Scope is visibility or accessbility of variable or other resorces in the area of our code.

// Globle Scope or functional scope:- Variable declared outside of a function is considerd as globle scope variable and variable define inside the scope.

let a="Hello";
function greet(){
    console.log(a)
}
greet()

// Local or Block Scope:- Block scope means we can only access within the block function;

let b="Hi"
function greet1(){
    let c="Good morning";
    console.log(b+" "+c);
}
greet1(); // Hi Good morning
// console.log(b+c) // error because c is not accessed outside the function
