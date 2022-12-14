// Kaden's algo
//arr=[-5,4,6,-3,4,-1] maximum sum subarray

function maxSumSubArray(arr){
    let maxSum=arr[0];
    let currSum=0;
    for(let i=1; i<arr.length; i++){
        // console.log(currSum)
        currSum=currSum+arr[i];
        if(currSum>maxSum){
            maxSum=currSum; 
        }
        if(currSum<0){
            currSum=0
        }
    }

    return maxSum
}
console.log(maxSumSubArray([-5,4,6,-3,4,-1]))