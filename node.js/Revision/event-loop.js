// Event-loop:- Event loop is an endless loop, which wait for the exicution of task then sleep, until it recevie more calls.
// Event-loop exicute task from the only event queue when call stack is empty i.e there is no ongoing task. Event loop allows to use callback & promises.

// call stack:- Call stack is use keep track multiple function call. It works real data structure where pushed and pop.

// callback:- function use as an argument to another fuction called callback function.

function greet(name, callback){
    console.log("Hi" +' '+name)

    callback();
}
 function propose(){
    console.log("I love you");
 }
//  greet("Anu", propose)

// Promise:- Promise is good way to handle asynchronous operation. It is use to find asynchronous operation is successfully completed or not.
// promise is a technique to avoid callback hell.
// promise have 3 stages
// pending, fullfill, rejected

function add(value){
    return value+5;
}
function sub(value){
    return value-3;
}
function mul(value){
    return value*5
}
let promise=new Promise(function(resolve, rejected){
   
    resolve(5);
})
promise.then(add)
.then(sub)
.then(mul)
.then((res)=>{
    console.log("Result: "+res)
}).catch((err)=>{
    console.log(err)
})

// callback hell: callback function are nexted inside each other since we depend upon the previous function, its called callback hell. Callback hell make a pyramid or pyramid of doom structure.

function addition(value, callback){
    return callback(value+5, false);
}
function subtraction(value, callback){
    return callback(value-3, false);
}
function multiple(value, callback){
    return callback(value*5, false);
}
function div(value, callback){
    return callback(value/5, false);
}

addition(5, function(addRes, err){
    if(!err){
        subtraction(addRes, function(subRes, err){
            if(!err){
                multiple(subRes, function(mulRes, err){
                    if(!err){
                        div(mulRes, function(divRes, err){
                            if(!err){
                                console.log("Result: "+divRes)
                            }
                        })
                    }
                })
            }
        })
    }
})