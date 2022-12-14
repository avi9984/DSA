// find the union of two sets.

function unionSet(arr1,arr2){
    let union=new Set(arr1);
    for(let elment of arr2){
        union.add(elment)
    }
    return union
}
let arr1 = new Set([1, 2, 3, 4, 4, 5, 6]),
  arr2 = new Set([7, 8, 9, 0, 1, 2, 3, 4]);

  console.log(unionSet(arr1,arr2))