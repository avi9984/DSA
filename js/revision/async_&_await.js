// async- async allow to write a promise based code. If oprate asynchonsly via event loop. async always return a value

async function fun(){
    console.log("Async function work");
    return Promise.resolve("Promise is success after 2 sec");
}
fun().then(function(res){
    setTimeout(() => {
       console.log(res) 
    }, 2000);
})

// Await- Await wait for the asynchronous operation.
// It is use to pause the async funtion until promise return a result.

let promise=new Promise(function(resolve,reject){
    setTimeout(() => {
      resolve("Promise is wait for 4 sec")
    }, 4000);
})

async function wait(){
    let a=await promise;
    console.log(a);
    console.log("first excut setTimeout then this line")
}
wait()