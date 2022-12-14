// The for..in loop in JavaScript allows you to iterate over all property keys of an object.

// Example 1: Iterate Through an Object

const student={
    name:"Moika",
    class:12,
    age:18
}
for(let key in student){
    console.log(`${key}=> ${student[key]}`)
}