
// var is a globle level scope varible

var a=10;
if(true){
    var a=20;
    console.log(a);
}
console.log(a)

// let is a block level scope varible
 let b=10;
 if(true){
    let b=30;
    console.log(b);
 }
 console.log(b)