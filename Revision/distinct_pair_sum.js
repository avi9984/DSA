// found distinct pair sum in arr.

function distinctPairSum(arr,sum){
    let elementSet=new Set();
    let seenSet=new Set();
    let count=0;
    for(let currValue of arr){
        let nextValue=sum-currValue;
        if(elementSet.has(nextValue) && !seenSet.has(currValue)){
            count++;
            seenSet.add(nextValue);
            seenSet.add(currValue);
        }
        elementSet.add(currValue);
    }
    return count;
}
console.log(distinctPairSum([1, 5, 1, 5,4,2,3,3,2,4],6))

function sumOfTwoArr(arr1, arr2){
    let res=[]
    for(let i=0; i<arr1.length; i++){
        res[i]=arr1[i]+arr2[i]
    }
    return res
}
console.log(sumOfTwoArr([1,2,3],[1,2,3]))

function sumOfAllElement(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum +=arr[i]
    }
    return sum
}
console.log(sumOfAllElement([1,2,3,4,5]))