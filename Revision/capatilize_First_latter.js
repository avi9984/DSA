// Capatilize function to like this
//["abc", "pqr", "xyz", "def"]=>["Abc", "Pqr", "Xyz", "Def"];

//condition
// arr ka zero index ka first letter ko cappital and concat bache huwe element ko


function capitaliseFirst(arr){
    let res=[];
    if(arr.length==0) return [];

    let cap=arr[0][0].toUpperCase()+arr[0].slice(1)
    res.push(cap)
    return res.concat(capitaliseFirst(arr.slice(1)))

}
console.log(capitaliseFirst(["abc","a","xyz","pqr"]))


