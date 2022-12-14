// find the how many times recurring 7 in arr=[1,3,8,5,7,5,8,7,9]

function reapitingElement(arr,k){
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]===k){
            count++
        }
    }
    return count
}
console.log(reapitingElement([1,3,8,5,7,5,3,3,3,3,8,7,9],3))