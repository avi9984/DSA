// Promise:- Promise is good way to handle asynchronous operation.It is used to find out the asyncronous operation is completed or not.

// Promise work on 3 states
// Pending- Opration is not completed
// fulfill- operation is successfully completed.
// rejected- error occur
// ex- like we are pay electricity bill, if pay bill some bank server issue or network issue so process is pending state, if succeefully completed so fullfill state, if not have sufficient balance in our account so rejected the payment so rejected state.

// 1.
const count=true;
let countValue=new Promise(function(resolve,rejected){
    if(count){
        resolve("There is a count value");
    }else{
        rejected("There is no count value")
    }
})
console.log(countValue)



// 2.
function add(value){
    return value+5
}

function sub(value){
    return value-3
}

function mul(value){
    return value*5
}

let promise=new Promise(function(resolve,reject){
    resolve(5)
})
promise.then(add)
.then(sub)
.then(mul)
.then((msg)=>{
    console.log("result:"+msg)
}).catch((err)=>{
    console.log("error:"+err)
})