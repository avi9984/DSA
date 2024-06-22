function unique(arr){
    let set=new Set(arr)
    return [...set]
}
console.log(unique([1,1,1,1,2,2,2,2,3,4,5,6]))