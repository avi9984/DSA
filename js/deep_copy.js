// Deep Copy :- Deep copy makes a copy of all attributes of the old object and allocates separated memory addresses for the new objects.

let obj1={a:"Ankit", b:"Ashish", c:"Anju"};
let obj2={...obj1};// deep copy
obj2.c="Avinash";
console.log(obj1) // { a: 'Ankit', b: 'Ashish', c: 'Anju' }
console.log(obj2)

