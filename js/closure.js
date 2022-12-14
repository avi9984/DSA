//Closure:- 
// Closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed.

// Closure is the combination of function and lexical environment with in the function was declared.

// Function along with the lexical scope bundle together from a closure



function greet(name) {
    function displayName() {
        console.log('Hi' + ' ' + name);
    }
    displayName();
}
greet('John'); // Hi John


// function greet(name) {
//     function displayName() {
//         console.log('Hi' + ' ' + name);
//     }

//     // returning a function
//     return displayName;
// }

// const g1 = greet('John');
// console.log(g1); // returns the function definition
// g1(); // calling the function


// function x(){
//     var a =7;
//     function y(){
//         console.log(a)
//         return a
//     }
//      console.log(y)
//     return y
// }
// x();
// console.log(z)
// console.log(z)
// console.log(z)


// function z(){
//     var b=900;
//     function x(){
//         var a=7;

//         function y(){
//             console.log(a,b)
//         }
//         y()
//     }
//     x()
// }
// z()


  