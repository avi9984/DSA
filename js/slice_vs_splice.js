// slice()-: slice is used to get new array by selecting sub-array from given array and does not change the original array.
// Time complexity of slice is O(n)

let a=[1,2,3,4,5,6,7,8,9,10];
console.log(a.slice(0,8))

let b=['Banana', 'Gavava', 'Apple', 'Pine-Apple', 'Water-Melen'];
// console.log(b.slice(2,4));

//splice()-: splice is used to add/remove element from the given array, it is change the original array. Time complexity of splice is O(n)

// add element in splice()
let months=['Jan', 'March', 'April', 'June'] 
months.splice(1,1,'feb') // first 1 is start and second 1 is index and next is value
// console.log(months) //['jan','feb','march','april','jun']

months.splice(5,0,'may')
// console.log(months) //[ 'Jan', 'feb', 'April', 'June', 'may' ]

let arr=[1,3,4,5,6]
arr.splice(1,0,2)
console.log(arr)


// remove lement from splice()
months.splice(2,2) //[ 'Jan', 'feb', 'April', 'June' ]
arr.splice(3,3)
console.log(arr)
