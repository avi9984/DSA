//The concept of default parameters is a new feature introduced in the ES6 version of JavaScript. This allows us to give default values to function parameters.

function sum(x = 3, y = -5) {

    // return sum
    return x + y;
}
// console.log(sum())
// console.log(sum(-5,-5))
// console.log(sum())   

const sum1 = () => 15;

const calculate = function( x, y = x * sum1() ) {
    return x + y;
}

const result = calculate(10);
console.log(result);