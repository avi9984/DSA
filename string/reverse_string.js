// reverse string 

// method 1

function rev(str){
    let sp=str.split("")
    let re=sp.reverse();
    let jo=re.join("")
    return jo
}
// console.log(rev('avi'))

// method 2
function reverse(str){
    let newStr="";
    for(let i=str.length-1; i>=0; i--){
        newStr +=str[i]
    }
    return newStr;
}
console.log(reverse("avinash"))