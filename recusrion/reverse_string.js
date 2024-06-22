// Reverse string 
 
// reverse string using for loop

// method1
function rev(str){
    return str.split("").reverse().join("")
}
console.log(rev("Avi"))

// method2

function revStr(str){ // revesrse string using for loop
    let st="";
    for(let i=str.length-1; i>=0; i--){
        st+=str[i]
    }
    return st
}
console.log(revStr("vin"))

// method3
function reverse(str){
    if(str=="") return ""
    return reverse(str.substr(1))+str.charAt(0)
}
console.log(reverse("avi"))
