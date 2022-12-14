// check the string is anangram or not


function anangram(str1, str2){
    if(str1.length !==str2.length) return false
    let count={};
    for(let element of str1){
        count[element]=(count[element]||0)+1
    }
    for(let element of str2){
        if(!count[element]){
            return false
        }
        count[element]-=1;
    }
    return true
}
console.log(anangram("avi","avi"))