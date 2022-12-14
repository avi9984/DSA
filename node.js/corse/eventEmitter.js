// const EventEmitter=require('events')

// class MyEmitter extends EventEmitter{}

// const myEmitter=new MyEmitter();
// myEmitter.on('waterFall',()=>{
//     console.log("please turn off the motor");
//     setTimeout(()=>{
//         console.log("Please turn off the moter lits a gneler remainder")
//     },3000)
// })


// console.log("the script is running ")
// myEmitter.emit('waterFall');
// console.log("The scrup is still running")


const EventEmitter=require('events');
class MyEmitter extends EventEmitter{}

const myEmitter=new MyEmitter();
myEmitter.on("waterFall",()=>{
    console.log("please turn off the motor")
    setTimeout(() => {
        console.log("please turn of the motor if tank full")
    }, 2000);
})

myEmitter.emit("waterFall")