// Classes are one of the features introduced in the ES6 version of JavaScript.

// A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house. House is the object.

// Since many houses can be made from the same description, we can create many objects from a class.


//creating class 

class person{
    constructor(name){
        this.name=name
    }
}
const name1=new person('Avinash');
const name2=new person('Ashish')
const name3=new person('Ankit')
// console.log(name1,name2,name3)

// Class Method

class Person{
    constructor(name){
        this.name=name
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}
let person1=new Person('john');
// console.log(person1.name);
// person1.greet()

// Hoisting-> A class should be defined before using it. Unlike functions and other JavaScript declarations, the class is not hoisted