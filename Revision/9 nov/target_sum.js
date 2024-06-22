// find the total numbers of pair in the array whose sum is equal to the  given value x.
// count the numbers of triplets sum is equal to the given value x.
//find the unique number in the given array where all the elements repeated twise with one value is unique [2,3,1,3,2,4,1]
// find the second largets in the given array
//rotating a given array by k stepes
// if an element is present in the array or not

function pairSum(arr, target){ // native approch

    let count=0;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]===target){
                count++
            }
        }
    }
    return count
}

function pair(arr, target){
    let s=0, e=arr.length-1;
    let count=0;
    while(s<e){
        if(arr[s]+arr[e]===target){
             
        }
    }
}