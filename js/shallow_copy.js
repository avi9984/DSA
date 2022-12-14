// Shallow Copy:- When reference variable is copied into a new reference variable it's called shallow copy.

let obj1={a:"Avinash", b:"Sunaina", c:"Rani"};
let obj2=obj1; // shallow copy
obj2.c="Anju"
console.log(obj1)
console.log(obj2)


let a=[1,2,3,4];
let b=a;
b.push(5);
console.log(a)
console.log(b)

let str1="avinash"
let str2=str1;
console.log(str1)