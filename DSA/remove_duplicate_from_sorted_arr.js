// Remove duplicate from shorted arry, arr =[1,1,2,2,3,4,5,5]

function remove_duplicate_from_shorted_arr(arr){
    if(arr.length==0) return 0;
    
    let i=0;
    
    for(let j=1; j<arr.length; j++){
        if(arr[i] !=arr[j]){
            i++
            arr[i]=arr[j]
        }
    }
    return arr.slice(0,i+1)
}
console.log(remove_duplicate_from_shorted_arr([1,1,2,2,3,4,5,5]))
