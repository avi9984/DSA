// Reverse array elemenets.

function reverse(arr){
    let start=0, end=arr.length-1;
    while(start<=end){
        [arr[start],arr[end]]=[arr[end],arr[start]];
        start++;
        end--;
    }
    return arr;
}
console.log(reverse([3,2,1]))