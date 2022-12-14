// method overriding
// If a child class has the same method or property name as that of the parent class, it will use the method and property of the child class. This concept is called method overriding. 

// parent class

class Parent{
    constructor(name){
        this.name=name;
        this.occupation="Backend Developer";
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}
// inheriting parent class
// class Student extends Parent 
