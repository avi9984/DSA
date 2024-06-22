// First capital later in given arrays string
//["abc","xyz","riya","meeta","khelawn"]=["Abc","Xyz","Riya","Meeta","Khelawn"]

// function capitaliseFunc(arr){
//     let res=[];
//     if(arr.length==0) return [];
//     let s= arr[0][0].toUpperCase()+arr[0].slice(1);
//     res.push(s);
//     return res.concat(capitaliseFunc(arr.slice(1)))
// }
// console.log(capitaliseFunc(["abc","xyz","riya","meeta","khelawn"]))

function capitaliseFunc(arr){
    let res=[]
    if(arr.length===0) return [];
    let s=arr[0][0].toUpperCase()+arr[0].slice(1);
    res.push(s);
    return res.concat(capitaliseFunc(arr.slice(1)))
}
console.log(capitaliseFunc(["avinash","kumar"]))