
// We calculate even number in arr
let arr=[1,2,3,4,5,6,7,19,20,18,15,21]
let count=0
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        count++
    }
}
console.log(count)