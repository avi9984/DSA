// Merge two arrays and find unique values

function uniqueList(arr1,arr2){
    let merge=[...arr1,...arr2]
    let unique=new Set(merge);
    return [...unique]
}
console.log(uniqueList([1,2,3,4,5],[4,5,6,7]))