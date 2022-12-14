// Merge Two Arrays and Remove Duplicate Items

// method1
function mergeTwoArr(arr1,arr2){
    let merge=[...arr1,...arr2];

    let removeDuplicate=[...new Set(merge)]
    return removeDuplicate;
}
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 5]
console.log(mergeTwoArr(arr1,arr2))
