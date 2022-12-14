
// Scope- Scope in javascript determines the accesibility of variable and function at various part of codes.

function a(){
    var b=10;
    c();
    function c(){

    }
    console.log(b)
}
a();