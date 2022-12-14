// Spread Operator
// The spread operator ... is used to expand or spread an iterable or an array.

const myName = ["My", "name", "is", "Avinash", "kumar"];
console.log(myName);
console.log(...myName);

// Copy Array Using Spread Operator

const arr1=[1,2,3,4,5];
const arr2=[...arr1,6,7,8,9,10];

console.log(arr2) // op-> [1,2,3,4,5,6,7,8,9,10]

const str1=["Ankit","Ashish"];
const str2=[...str1,"Avinash"];
console.log(str2); // [Ankit,Ashish,Avinash]


function sum(x,y,z){
   console.log (x*y*z);
}
const num=[1,2,3]
sum(...num)

// merge two arrays
let Arr1=[1,2,3,4,5,6];
let Arr2=[7,8,9,10,11,12,13];
let Arr=[...Arr1,...Arr2];
console.log(Arr)