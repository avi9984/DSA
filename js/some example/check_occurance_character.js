// write a program to check how many occurance of latter

function checkOccurance(str,letter){
    let count=0;
    for(let i=0; i<str.length; i++){
        if(str[i]===letter){
            count++
        }
    }
    return count;
}
console.log(checkOccurance("avinash","a"))