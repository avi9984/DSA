//Promise:- Promise is a good way to handle asynchronous operations. It is used to find asynchronous opertion is successfully completed or not.
// Promise is a technique to avoid callback hell.

// Promise handle 3 states
// 1. Pending- not completed
// 2. fullfill- operation completed
// 3. Rejected- error

function add(value){
    return value+5
}

function sub(value){
    return value-3;
}

function mul(value){
    return value*5;
}

const promise=new Promise(function(resolve,reject){
    resolve(5);
});

promise.then(add)
.then(sub)
.then(mul)
.then((res)=>{
    console.log("Result: "+res)
}).catch((err)=>{
    console.log(err)
})