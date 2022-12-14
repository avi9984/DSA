// find unique number in the array element

//[1,1,2,2,3,4,4,5,5,6,7,8,8] -> 8

// condition
// i=0, j=1
// arr[i] !== arr[j]
// i++
// arr[i]=arr[j]

function countUnique(arr){// count kr rha hai ki kitne element array me hai
 if(arr.length){
    let i=0;
    for(let j=1; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i]=arr[j];
        }
    }
    return i+1;
 }else{
    throw  new Error("Array is empty")
 }
}
console.log(countUnique([1,1,2,2,2,3,4,4,5,5,6,7,8,8,9,9,12]))




function findUnique(arr){
    const set = new Set(arr);
    return [...set]
}
console.log(findUnique([1,1,2,2,2,3,4,4,5,5,6,7,8,8,9,9,9,9,9]))


 