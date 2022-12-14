// Checking sum zero
//[-5,-4,-3,-2,0,2,4,6,8]->[-4,4]

function sumPairZero(arr){
    for(let number of arr){
        for(let j=1; j<arr.length; j++ ){
            if(number+arr[j]==0){
                return [number,arr[j]]
            }
        }
    }
}
console.log(sumPairZero([-5,-4,-3,-2,0,2,4,6,8]))// Tc=O(n^2)

//[-5,-4,-3,-2,0,2,4,6,8]-> [-4,-4]

function findSumPair(arr){
   let left=0, right=arr.length-1;

   while(left<right){
    let sum=arr[left]+arr[right];
    if(sum ===0){
        return [arr[left],arr[right]];
    }else if(sum>0){

        right--;
    }else{
        left++;
    }
   }
}
console.log(findSumPair([-5,-4,-3,-2,0,2,4,6,8])) // Tc=O(n) linear