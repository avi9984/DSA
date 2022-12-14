// Callback:- We can pass a function as an arguments, This function is passed as an argument inside of another function called callback function.

// Function that are used as an argument to another function are called callback function.

// Pros of callback:- 1) Simplicity 2) Popularity
// Cons of callback:- 1) Lack of Readability 2) callback hell

function greet(name,callback){
    console.log("hi"+ " "+name)
    callback()
}
function callMe(){
    console.log("I am a callback function");
}

greet("Avinash",callMe)

function serverRequest(query,callback){
    setTimeout(() => {
        var res=query+"full!"
        callback(res)
    },3000);
}

function getResult(result){
    console.log("responce from the server: " +result)
}
serverRequest("The glass is half :", getResult)