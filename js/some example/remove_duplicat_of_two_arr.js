// Remove duplicat of two array 

function duplicat(arr1,arr2){
    let merge=[...arr1,...arr2];
    let uniqe=new Set(merge);
    return [...uniqe]
   
}
console.log(duplicat([1,2,3],[2,3,4,5,6]))