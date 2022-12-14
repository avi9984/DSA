// const http=require('http')
// http.createServer((req,res)=>{
//     res.end("Welcome to nodeJS")
// }).listen(3000)

// const app=require('express')()
// const PORT=3000;
// app.listen(PORT,()=>{
//     console.log(`Server is running on ${PORT}`)
// });

// app.get('/js',(req,res)=>{
//     res.send("<h1>js , nodejs , mongodb</h1>")
// })

// const EventEmitter=require('events')

// class MyEmitter extends EventEmitter{}

// const myEmitter=new MyEmitter();

// myEmitter.on("waterFall",()=>{
//     console.log("please turn of the motor");
//     setTimeout(() => {
//         console.log("please turn of the motor if tank is full")
//     }, 1000);
// })

// myEmitter.emit("waterFall")

// function add(value, callback){
//     return callback(value+5, false);
// }

// function sub(value,callback){
//     return callback(value-3, false);
// }

// function mul(value, callback){
//     return callback(value*5, false);
// }

// add(5, function(addRes, err){
//     if(!err){
//         sub(addRes, function(subRes, err){
//             if(!err){
//                 mul(subRes, function(mulRes, err){
//                     if(!err){
//                         console.log("Result: "+mulRes)
//                     }
//                 })
//             }
//         })
//     }
// })

// function add(value){
//     return value+5
// }

// function sub(value){
//     return value-3;
// }

// function mul(value){
//     return value*5;
// }

// let promise=new Promise(function(resolve,reject){
//     resolve(5)
// })
// promise.then(add)
// .then(sub)
// .then(mul)
// .then((res)=>{
//     console.log("Result: "+res)
// }).catch((err)=>{
//     console.log(err)
// })

// function addtion(...arg){// rest oprator accept infinite nuber of argumnet in the array.
//     res=0;
//     for(let value of arg){
//         res +=value;
//     }
//     return res
// }
// console.log(addtion(1,2,3,4,5,6,7,8,9,10))

// function abc(){
//     console.log("hii")
//     return;
// }

// function pqr(){
//     console.log("How are you")
//     return;
// }

// function xyz(){
//     pqr();
//     abc();
//     setTimeout(() => {
//         console.log("I, am fine")
//     }, 2000);
// }

// xyz()

// function greet(){
//     console.log("good morning")
// }
// setTimeout(greet,1000)

// function promise(){
//     console.log("You are my dream girl")
// }
// setInterval(promise,1000)

// function merge(arr1,arr2){
//     let res=[], i=0, j=0;
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i]>arr2[j]){
//             res.push(arr2[j])
//             j++
//         }else{
//             res.push(arr1[i])
//             i++
//         }
//     }
//     while(i<arr1.length){
//         res.push(arr1[i])
//         i++
//     }

//     while(j<arr2.length){
//         res.push(arr2[j])
//         j++
//     }

//     return res
// }

// function mergeSort(arr){
//     if(arr.length<=1) return arr;
//     let mid=Math.floor((arr.length)/2)
//     let left=mergeSort(arr.slice(0,mid));
//     let right=mergeSort(arr.slice(mid));
//     return merge(left,right);
// }

// console.log(mergeSort([19,1,-1,25,15,6,5,0]))

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class Stack{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.head==null;
    }

    add(data){
        let newNode=new Node(data)
        if(this.isEmpty()){
            this.head=newNode
            return
        }
        newNode.next=this.head;
        this.head=newNode;
        this.size++
    }

    remove(){
        if(this.isEmpty()) return -1;
        let top=this.head.data
        this.head=this.head.next;
        this.size--;
        return top
    }

    peek(){
        if(this.isEmpty()) return -1;
        return this.head.data
    }

    getSize(){
        return this.size;
    }
}

const s=new Stack();

s.add(1);
s.add(2);
s.add(3);
s.add(4);
while(!s.isEmpty()){
    console.log(s.peek());
    s.remove()
}
console.log(s.isEmpty())
console.log(s.getSize())