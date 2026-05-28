// Reverse the string with not change the chacartors only reverse the place e.g str="I love javascript" output: "javascript love I"

function reversStr(str){
    let word="";
    let words=[];
    for(let i=0; i<str.length; i++ ){
        let char= str[i];
        
        if(' '===char ||'\n'===char|| 't'===char){
            if(word.length>0){
                words.push(word);
                word= '';
            }
        }else{
            word +=char
        }
    }
    
    //If string not end with space
    if(word.length>0){
        words.push(word)
    }
    
    let res='';
    for(let i=words.length-1; i>=0; i--){
        res+=words[i];
        if(i>0){
            res+=" ";
        }
    }
    return res
}
console.log(reversStr("I love javascript"));  // "javascript love I"
console.log(reversStr("  Hello   world  ")); //world Hello
