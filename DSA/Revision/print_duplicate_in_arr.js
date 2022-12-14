// Print all duplicate element in arrays

function duplicate(arr){
    let map=new Map();
    for(let i=0; i<arr.length; i++){
        if(map.get(arr[i])==undefined) map.set(arr[i],1)
        else map.set(arr[i], map.get(arr[i])+1)
    }
    console.log(map)
    let res=[];
    for(let pairs of map){
        if(pairs[1]>1) res.push(pairs[0])
    }
    return res;
}
console.log(duplicate([1,2,3,1,2,5,6,7]))