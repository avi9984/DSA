function reverseArr(arr){
    let start=0; end=arr.length-1;
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]]
        start++;
        end--;
    }
    return arr
}
console.log(reverseArr([3,2,1]))