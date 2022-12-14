// "this" oprator:- "this" keyword is used to object which object depends on how "this" is invoke or called. "this" is a globle scope.

function person(){
    this.name="Avi"
    console.log(this)
}
let person1=new person()
console.log(person1.name)

// let a=this;
// console.log(a);
// this.name="Kajal";
console.log(this.name);