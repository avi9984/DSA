// find the sum of min and max in a arrays

function sum(arr){
    let min=arr[0], max=arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i];
        }else if(arr[i]>max){
            max=arr[i]
        }
    }
    console.log([min, max])
    return min+max
}
console.log(sum([1,2,3,4]))