// swap alternate element

function swapAlternate(arr){
    for(let i=0; i<arr.length; i=i+2){
        if(i+1<arr.length){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        }
    }
    return arr
}
console.log(swapAlternate([1,2,3,4,5,6]))
console.log(swapAlternate([1,2,3,4,5]))