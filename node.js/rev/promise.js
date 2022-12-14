function add(value){
    return value+5;
}
function sub(value){
    return value-3;
}
function mul(value){
    return value*3;
}

let promise=new Promise((resolve,reject)=>{
    resolve(5)
})

promise.then(add)
.then(sub)
.then(mul)
.then((res)=>console.log("res :",res))
.catch((err)=>console.log(err))