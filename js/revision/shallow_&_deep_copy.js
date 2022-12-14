// Shallow Copy:- When reference variable is copied into new reference variable through assignment operator called shallow copy.

let obj1={a:"Anu", b:"priya"};
let obj2=obj1 // shallow copy
obj2.a="priya"
console.log(obj1)

// Deep Copy:- Deep copy allocates new memory location for the new objects
let obj3={a:"anu", b:"priya"}
let obj4={...obj3} // deep copy
obj4.b="anu";
console.log(obj3)
console.log(obj4)

