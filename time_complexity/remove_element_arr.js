// Remove specific value from Array

function removeItem(arr,n){
    let item=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i] !==n){
            item.push(arr[i])
        }
    }
    return item
}
console.log(removeItem([1,3,4,5,6],3))