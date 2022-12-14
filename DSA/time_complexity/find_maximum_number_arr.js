// find the maximum number in array and it's time complexity
function findMaximuNumber(arr){
    let max=0
    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
 return max;  
}
console.log(findMaximuNumber([10, 20, 4]))

function findMax(arr){
    return Math.max(...arr)
}
console.log(findMax([10, 20, 4]))