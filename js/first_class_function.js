// first class function:- first class function when treated as another variable, A function can be passed as an argument to other function, can return another fucntion.

function a(){
    return "Hii Miss"
}

function greet(msg,name){
    console.log(msg() +" "+ name)
}
greet(a,"Kanika")


function language(){
    return "Welcome to"
}

function pro(msg,name){
    console.log(msg() + " " +name)
}
pro(language, "Javascript")