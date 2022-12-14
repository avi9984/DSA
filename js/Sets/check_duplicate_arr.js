// USING SETS TO CHECK FOR DUPLICATES IN AN ARRAY

function checkDuplicate(arr){
    let set=new Set(arr)
    return set.size<arr.length;
}
console.log(checkDuplicate([1,2,3,4])) // Tc=O(n), Sc=O(n)
console.log(checkDuplicate([1,1,2,3,4]))