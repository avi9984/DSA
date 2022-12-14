
// The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables.

// this example is ES5 version
let person={
    name:"Ankit",
    age: 22,
    gender:"Male",
    bd:"djs",
    dkd: "djdd"
}
// var name=person.name;
// var age=person.age;
// var gender=person.gender;
// console.log(name,age,gender);

// ES6 version
// var {name,age,gender}=person;
let {name,...other}=person
console.log(name);
console.log(other);
// console.log(name,age,gender);

let arr=['one','two','three',4,5,6,7]
let [x,...y]=arr
// console.log(x,z);
// console.log(...arr)
console.log(x);
console.log(y)

