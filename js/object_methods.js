// Explain Object.keys(), Object.values(), Object.entries()

// Object.keys():- Object.keys() get all keys of an object by passing object as a parameter.

let obj = { a: 10, b: 20, c: 30 };
let keys=Object.keys(obj);
// console.log(keys);

// <================================================================>

// Object.values():- Object.values() get all values of an object.
let values=Object.values(obj)
// console.log(values) // Time complexity of => Tc=O(n)


// =====================================================================

// Object.entries():- Object.entries() return both key and value pairs,where first element is keys and second element is values; 

let entries=Object.entries(obj);
console.log(entries)
