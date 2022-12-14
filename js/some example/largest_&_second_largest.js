// find largest element and second largest lement in an array.

function largestAndSecondLargest(arr){
    let largest=arr[0];
    let secondLargest=arr[1];
    for(let i=2; i<arr.length; i++){
        if(arr[i]>largest){
            secondLargest=largest;
            largest=arr[i];
        }else if(arr[i]>secondLargest && arr[i]<largest){
            secondLargest=arr[i];
        }
    }
    console.log("largest : "+largest, "secondLargest : "+secondLargest)
}
largestAndSecondLargest([1,2,3,4,5,6,7,8])

function largestandSecond(arr){
    let largest=arr[0];
    let secondLargest=arr[1];
    for(let i=2; i<arr.length; i++){
        if(arr[i]>largest){
            secondLargest=largest;
            largest=arr[i];
        }else if(arr[i]>secondLargest && arr[i]<largest){
            secondLargest=arr[i];
        }
    }
    return [secondLargest,largest]
}
console.log(largestandSecond([1,2,3,4,5]))