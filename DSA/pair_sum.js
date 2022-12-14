// Count distinct pairs with given sum or check whether given sum pair exist in an array

function pairSum(arr,sum){
    let map = new Map();
    for(let i=0; i<arr.length; i++){
        if(map.get(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }else{
            map.set(arr[i],1);
        }
    }
    //arr[i]+nextElem=sum, nextElem=sum-arr[i]
    for(let i=0; i<arr.length; i++){
        let nextElem=sum-arr[i];
        // if nextElem found
        if(map.get(nextElem)){
            if(nextElem==arr[i] && map.get(nextElem)>1){
                // console.log("Pair Exist")
                console.log(arr[i],nextElem)
                break;
            }
            else if(nextElem==arr[i] && map.get(nextElem)==1){
                console.log("Pair Not Exist");
                 break;
            }
            
        }
    }
    // return map
}

console.log(pairSum([9,2,4,5,9,7,4,5],12))