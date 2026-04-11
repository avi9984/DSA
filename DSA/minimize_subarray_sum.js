//arr=[2,3,1,2,4]
//target=7
//output=3, arr=[1,2,4]

function minimize_subarray_sum(arr,target){
    let minLength=Infinity
    let left=0;
    let currentSum=0;
    
    for(let right=0; right<arr.length; right++){
        currentSum+=arr[right]
        
        while(currentSum>=target){
            minLength=Math.min(minLength, right-left+1)
            currentSum -=arr[left]
            left++
        }
    }
       
     return (minLength===Infinity)?0:minLength
}

console.log(minimize_subarray_sum([2,3,1,2,4],7))// 3
