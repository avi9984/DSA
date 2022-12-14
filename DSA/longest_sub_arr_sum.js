 

 function sumZero(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=1; j<arr.length; j++){
            if(arr[i]+arr[j]==0){
                return [arr[i],arr[j]]
            }
        }
    }
 }
 console.log(sumZero([-4,-3,4,3,3]))