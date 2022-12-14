
// map():- map() create a new array with result of calling function for every array elements.

// Map is similar to objects in JavaScript that allows us to store elements in a key/value pair.



// create map
let map=new Map();
map.set('info',{name:"Avinash",age:22})
// console.log(map);

// map with Object key 
let map1=new Map();
let obj={};
map1.set(obj,{name:"Ashish Kumar",age:22})
console.log(map1)

// Access Map element
console.log(map1.get(obj));

// check map element
console.log(map1.has(obj));

// Removing map element use clear() or delete()
let map2 = new Map();
map2.set('info', {name: 'Jack', age: "26"});

// removing a particular element
map2.delete('address'); // false
console.log(map2); // Map {"info" => {name: "Jack", age: "26"}} 

map2.delete('info'); // true
console.log(map2); // Map {}

// Removing all element in map
// map2.clear()
// console.log(map2);

console.log(map1.size)

// Iterate Through a Map

let mMap=new Map();
mMap.set('name','Ashish');
mMap.set('value','22');

// for(let [key,value] of mMap){ // for of loop
//     console.log(key +'-'+value)
// }

mMap.forEach(function(value,key){
    console.log(key+'-'+value)
})



