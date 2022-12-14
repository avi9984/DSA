// Given an array of size N and you have to tell whether the array is perfect or not. An array is said to be perfect if it's reverse array matches the original array. If the array is perfect then print "PERFECT" else print "NOT PERFECT".

// Input : Arr[] = {1, 2, 3, 2, 1}
// Output : PERFECT
// Explanation:
// Here we can see we have [1, 2, 3, 2, 1] 
// if we reverse it we can find [1, 2, 3, 2, 1]
// which is the same as before.
// So, the answer is PERFECT.

function perfectArrays(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] !==arr[arr.length-i-1]) return false;
    }
    return true;
}
// console.log(perfectArrays([1, 2, 3, 2, 1]))// true
// console.log(perfectArrays([1, 2, 3, 4, 5]))// false


function isPalindrom(arr){
    let start=0, end=arr.length-1;
    while(start<=end){
        if(arr[start]== arr[end]){
            start++;
            end--;
            return true
        }else{
            return false
        }

    }
    return arr
}
console.log(isPalindrom([1,2,3]))