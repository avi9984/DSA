
function merge(arr1, arr2){
    let res=[], i=0,j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]>arr2[j]){
            res.push(arr2[j])
            j++
        }else{
            res.push(arr1[i])
            i++
        }
    }
    while(i<arr1.length){
        res.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        res.push(arr2[j])
        j++
    }
    return res
}

// console.log(merge([1,9,4,2],[3,0,5]))

function mergeSort(arr){
    if(arr.length<=1) return arr
    let mid=Math.floor((arr.length)/2)
    let left=mergeSort(arr.slice(0,mid));
    let right=mergeSort(arr.slice(mid))
    return merge(left,right)
}
console.log(mergeSort([1,99,0,25,33,-1,-11,15,2,4,6,12]))