function isValidNumber(input){
    let isValid=false;
    for(let i=0; i<input.length; i++){
        if(input[i]>='0' && input[i]<='9'){
            isValid=true;
        }else{
            isValid=false;
            break;
        }
    }
    return isValid;
}
console.log(isValidNumber('123'))
console.log(isValidNumber('123b'))