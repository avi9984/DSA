// Example 1: Check Occurrence of a Character 

function countString(str, letter){
    let count=0;
    for(let i=0; i<str.length; i++){
        if(str[i] ===letter){
            count++
        }
    }
    return count;
}
console.log(countString("avinash","h"))