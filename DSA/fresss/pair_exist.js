// find pair exist with in the given sum of array 

function pairExist(arr,sum){
    let start=0, end=arr.length-1
    let isExistPair=false;
    while(start<=end){
        if(arr[start]+arr[end]==sum){
            isExistPair=true;
            break;
        }else if(arr[start]+arr[end]>sum){
            end--;
        }else{
            start++
        }
    }
    return isExistPair
}
console.log(pairExist([1,2,3,4,5,6,7,8,9,10],29))