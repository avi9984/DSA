// Map()- returns a new array and itrete with every element.
 let num=[1,4,9,16,25];
 let x=num.map(Math.sqrt)
 console.log(x)
 let y=x.map((e)=>{
      return e+2;
 })
 console.log(y)

 // filter()- filter returns only those element which fullfill the condition and returns a new array.

 let ages=[14,16,18,31,25,60]
 function checkAdult(age){
        return age>=18
 }
 let a=ages.sort().filter(checkAdult)
console.log(a)

// concat()- concat merge two or more than two arrays and returns new array

let b=[1,2,3,4,5], c=[4,5,6,7,8]
let d=b.concat(c)
console.log(d)

let set=new Set(d)

console.log([...set])