// Slice():- Slice returns new array without change the orignal array, time complexity of slice O(n);

var arr=[1,2,3,4,5,6,7];
let a=arr.slice(1,7)
console.log(a)

// Splice() :- Splice add or remove the element of array, it is change the orignal array, time complexity of splice O(n)

let b=arr.splice(7,8)
console.log(b)
