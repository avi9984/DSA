//EventEmitter:- Event emitter is a node.js class that including all objects is capable to emitting event. It is call with name using eventEmitter.on()

// const EventEmitter=require('events')
// class MyEmitter extends EventEmitter {}
// const myEmitter=new MyEmitter();
// myEmitter.on("waterFall",()=>{
//     console.log("please turn on the motor")
//     setTimeout(() => {
//         console.log("please turn off the motor if tank is full")
//     }, 4000);
// })
// console.log("this script is running")
// myEmitter.emit("waterFall")

const EventEmitter=require('events')

class MyEmitter extends EventEmitter{}
const myEmitter=new MyEmitter();
myEmitter.on("water",()=>{
    console.log("please on the motor")
    setTimeout(() => {
        console.log("please turn off the motor if tank is full")
    }, 2000);
})
console.log("this script is work")
myEmitter.emit("water")