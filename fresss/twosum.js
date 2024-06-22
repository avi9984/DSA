function twoSum(arr,sum){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]==sum){
                return [arr[i],arr[j]]
            }
        }
    }
}
console.log(twoSum([1,4,5,8,2,9],10))

function sumZero(arr){
    let s=0, e=arr.length-1;
    while(s<=e){
        let sum=arr[s]+arr[e];
        if(sum==0){
            return [arr[s],arr[e]]
        }else if(sum>0){
            e--
        }else{
            s++
        }
    }
}
console.log(sumZero([1,2,3,-3,4,-5,-4]))