// ES6
// Rest & Spread Operator

// Rest example

function addNumbers(a,b,c,...other){
    console.log(other)
    return a+b+c;
}
console.log(addNumbers(1,2,3,4,5,6,7))

// Spread operator

var names=["Avinash","Ashish","Ankit"];

function getNames(name1, name2, name3){
    console.log(name1, name2, name3);
}
getNames(...names);

// Object ke sath kaise work krta hai -> Rest operator

var students={
    name:"Avinash",
    age:22,
    hobbies:["Cricket","Watch Movies"]
}

console.log(students.age);
console.log({...students});

// Object in Spread
var newStudent={
    ...students,
    age:"23"
}
console.log(newStudent)