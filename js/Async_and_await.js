// Async js programming
// Async and await
//Async:- Async simply allows us to write promise based code, it operates asynchronously via the event loop, async function always return a value.

async function f() {
    console.log('Async function.');
    return Promise.resolve();
}

f();

async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}

f().then(function(result) {
    console.log(result)
});

// Await :- Await is used inside the async function to wait for asynchronous operation. Await pause the async function until the promise return a result(resolve or reject) value.

let promise=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("Promise resolved")
    }, 3000);
})

async function fun(){
    let res=await promise;
    console.log(res);
    console.log('hello')
}
fun()