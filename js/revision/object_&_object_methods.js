// Object:- Object is store multiple datas.
let parson={
    name:"avinash",
    age:"22",
    degination:"Software Developer"
}
console.log(parson.name)
console.log(parson.age)
console.log(parson.degination)

// Object.keys():- Object.keys() get all keys of an object
let keys=Object.keys(parson)
console.log(keys)

// Object.values():- Object.values() get all values of an objects
let value=Object.values(parson)
console.log(value);

// Object.entries():- Object.entries() return a new array in the form of key/value pair, where first element as key and second element is value.

let entries=Object.entries(parson);
console.log(entries)