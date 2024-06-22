function bubbleSort(arr){
    for(let i=0; i<=arr.length-1; i++){
        let swap=false
        for(let j=0; j<=arr.length; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                swap=true
            }
        }
        if(swap==false) break;
    }
    return arr;
}
console.log(bubbleSort([1,9,0,2,5,3,1]))