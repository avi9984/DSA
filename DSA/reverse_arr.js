// Reverse array of element 

function reverse(arr){
    start=0; end=arr.length-1;
    while(start<=end){
        [arr[start],arr[end]]=[arr[end],arr[start]]; // swap a number
        start++;
        end--;
    }
    return arr;
}
console.log(reverse([3,2,1]))


// using libary method
function rev(arr){
    return arr.reverse();
}
console.log(rev([1,2,3,4]))

 