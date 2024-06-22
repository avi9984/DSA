// 5. Downward Triangle or invert half pyramid Star Pattern

function invertTringle(n){
    let str="";
    for(let i=n; i>=1; i--){
        
        for(let j=1; j<=i; j++){
            // console.log(j)
            str += " *";
        }
        str += "\n";
    }
    return str;
}
console.log(invertTringle(5))