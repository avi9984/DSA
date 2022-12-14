// Reverse strings in javascript.

function reverse(str){
    let newStr="";
    for(let i=str.length-1; i>=0; i--){
        newStr+=str[i]
    }
    return newStr;
}
console.log(reverse("love you"))

// buit in methode 
function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString("hum tumko pyar krenge"))