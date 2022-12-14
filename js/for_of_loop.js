// The for..of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).

// for ...of with arrays
const arr=[1,2,3,4,5,6,7,8,9];
for(let i of arr){
    console.table(i);
}

// for ...of with string
let str='Avinash';
for(let i of str){
    console.log(i);
}

// for ...of with sets
let set =new Set([1,2,3,4,5])
for(let st of set){
    console.log(st);
}

// for ...of with Maps
let map=new Map();
map.set('name','Avinash');
map.set('age','22');
for(let [key,value] of map){
    console.log(key+"-"+value)
}