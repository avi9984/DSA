
function partition(arr,low,high){
    let pivot=arr[high], i=low;
    for(let j=low; j<high;j++){
        if(arr[j]<=pivot){
            [arr[i],arr[j]]=[arr[j],arr[i]]
            i++
        }
    }
    [arr[i],arr[high]]=[arr[high],arr[i]]
    return i
}


function quickSort(arr,low,high){
    if(low>=high) return 
    let pivot=partition(arr,low,high);
    quickSort(arr,low,pivot-1) // less than pivot element
    quickSort(arr,pivot+1, high) // greter than pivot element
}

let arr = [10, 7, 8, 9, 1, 5];
quickSort(arr, 0, arr.length - 1);
console.log(arr);