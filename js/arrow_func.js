
// Arrow Function- Arrow function is ES6 version of javascript.This is sorter syntax for normal(traditional) function
// Arrow funcution are declared without function keyword.
// Don't need to return key word in arrow function
let value=(val1,val2,val3)=>{
    return val1*val2*val3;
}
console.log(value(1,2,3))

let values=()=>{
    console.log("in this arrow function not use the parameter")
}
values();