// write a function Find missing element in arr=[1,2,3,5,6,7];


function missingElement(arr){
    let n=arr.length + 1;
    
    let natural_sum=(n*(n+1))/2;

    let sum=0
    for(let i=0; i< arr.length; i++ ){
        sum += arr[i]
    }
    
    return natural_sum - sum
}

console.log(missingElement([1,2,3,5,6,7])) // 4
