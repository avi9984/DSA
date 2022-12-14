// Event Emitter:- Event Emitter is a node.js class including all objects is emit events.

const EventEmitter=require('events');
class MyEmitter extends EventEmitter{};
const myEmitter=new MyEmitter();

myEmitter.on("water",()=>{
    console.log("please turn on the motor")
    setTimeout(() => {
        console.log("please turn off the motor, if tank is full")
    }, 2000);
})

myEmitter.emit("water")