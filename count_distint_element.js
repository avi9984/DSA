

function distintElement(arr){
    let set=new Set();
    for(let elm of arr){
        set.add(elm)
    }
    return set.size
}
console.log(distintElement([4,3,2,1,0,9,8,7,6,1,1,111,22,1]))

function uniqe(arr){
    let set =new Set(arr)
    return [...set]
}
console.log(uniqe([4,3,2,1,1]))

function arrReverse(arr){
    let left=0, right=arr.length-1
    while(left<=right){
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++
        right--
    }
    return arr
}
console.log(arrReverse([1,2,3,4]))