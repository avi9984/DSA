// Synchronous:- Synchronous means exicute one instruction at a time.
// console.log("1");
// console.log("2");
// console.log("3")

//Asynchronous:- Ansynchronous means run each task independently at the same time.
console.log("1");
setTimeout(() => {
    console.log("2")
}, 2000);
console.log("3")
console.log("4")