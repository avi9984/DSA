function partition(arr, low, high){
    let pivot=arr[high], i=low;
    for(let j=low; j<high; j++){
        if(arr[j]<=pivot){
            [arr[i], arr[j]]=[arr[j],arr[i]]
            i++
        }
    }
    [arr[i], arr[high]]=[arr[high],arr[i]]
    return i
}

function quickSort(arr,low, high){
    if(low>=high) return
    let pivot=partition(arr, low, high);
    quickSort(arr,low, pivot-1)// less than the pivot element
    quickSort(arr,pivot+1, high)// greater than the pivot element
}
let arr=[9,19,1,11,2,4,5,3]
quickSort(arr, 0, arr.length-1)
console.log(arr)