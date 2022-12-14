// Callback Hell:- The callback functions are nested inside each other since we depend on the data from the privious function, this is called callback hell.

// Callback hell make a pyramid structure

function add(value, callback){
    return callback(value+5, false)
}

function sub(value,callback){
    return callback(value-3, false)
}

function mul(value, callback){
    return callback(value*5, false)
}

// add(5, function(addRes,err){
//     if(!err){
//         sub(addRes,function(subRes,err){
//             if(!err){
//                 mul(subRes,function(mulRes,err){
//                     if(!err){
//                         console.log("result: "+mulRes)
//                     }
//                 })
//             }
//         })
//     }
// })



let promise=new Promise(function(resolve,reject){
    resolve(5)
})
promise.then(add).then(sub).then(mul).then((msg)=>{
    console.log("Result: "+msg)
}).catch((err)=>{
    console.log("err"+err)
})