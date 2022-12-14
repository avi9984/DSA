//Callback funtion:- Function that are used as an argument to another function are called callback function..

function greet(name, callback){
    console.log("Hi"+' '+name)
    callback()
}

function callMe(){
    console.log("This is callback function")
}
greet("jay", callMe)