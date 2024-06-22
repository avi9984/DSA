// find the minimum value and maximum value in array

function findMinAndMax(arr){
    let min=arr[0] ,max=arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i]
          
        }else if(arr[i]>max){
            max=arr[i]
        }
    }
    return [min,max]

}
console.log(findMinAndMax([1,2,3,4]))

function minAndMax(arr){
    let min=arr[0], max=arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i]
        }else if(arr[i]>max){
            max=arr[i]
        }
    }
    return [min,max]
}
console.log()