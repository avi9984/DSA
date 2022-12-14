// 3. Right Triangle or half pyramid Pattern in Javascript

function halfPyramid(n){
    let str="";
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            str += " *"
        }
        str +="\n"
    }
    return str
}
console.log(halfPyramid(5))