function merge(arr1,arr2){
    let mergeArr=[...arr1,...arr2]
    let unique= new Set(mergeArr)
    return [...unique]
}
console.log(merge([1,1,1,2,3],[3,2,1]))