
function binarySerarch(arr, key){
    let start=0, end=arr.length-1;
    while(start<end){
        let mid=Math.floor((start+end)/2)
        if(arr[mid]==key){
            return mid
        }else if(key > arr[mid]){
            start++
        }else{
            end--
        }
    }
    return -1
}
console.log(binarySerarch([1,2,3,4,5,6,7,8],3))