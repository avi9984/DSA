
function twoSum(arr,sum){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]==sum){
                return [i,j]
            }
        }
    }
}
// console.log(twoSum([1,4,5,6,0,6],5))// [0,1] ,Tc=O(n^2)

function sum(arr,sum){
    let i=0 , j=arr.length-1;
    while(i<j){
        if(arr[i]+arr[j]==sum){
            return [i,j]
        }else if(arr[i]+arr[j]>sum){
            j--
        }else{
            i++
        }
    }
}
console.log(sum([1,4,5,6,0,6],5))