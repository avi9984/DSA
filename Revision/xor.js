// find the only non-reapiting element in array where every element repeat thries arr=[2,2,1,5,1,1,2]

function non_Reapiting(arr){
    let res=0;
    for(let i=0; i<arr.length; i++){
        res=res^arr[i]
    }
    return res;
}
console.log(non_Reapiting([5,4,1,4,3,5,1,1,4,4])) 