// What is memoization?
// Memoization is a form of caching where return value of a function is cached based on its parameter. If the parameter function is not change the cahed version function returned.

function addTo256(num){
    return num+256;
}
// console.log(addTo256(20));
// console.log(addTo256(40));
// console.log(addTo256(20));

function memoizationAddTo256(){
    let cached={};
    return function(num){
        if(num in cached){
            console.log("cached value");
            return cached[num]
        }else{
            cached[num]=num+256
            return cached;
        }
    }
}
let memoization=new memoizationAddTo256()
memoization(40);
memoization(20)