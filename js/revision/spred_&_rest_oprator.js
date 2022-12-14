// Spread Opretor(...):- spread oprator copy items into a single array and returns a new array.
let arr1=[1,2,3,4,5];
let arr2=["avi","nana","Ashish"]
let res=[...arr1,...arr2]
console.log(res)

// Rest Operator(...):- Rest operator accept the infinite number of argument in the arrays.
function add(...nums){
    let sum=0;
    for(let i=0; i<nums.length; i++){
        sum +=nums[i]
    }
    return sum;
}
console.log(add(1,2,3,4,5,6,7,8,9,10,"abc","5*5"))