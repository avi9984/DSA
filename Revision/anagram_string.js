function isAnagram(str1,str2){
    if(str1.length !==str2.length && str1!==str2) return false;
    map={};
    for(let element of str1){
        map[element]=(map[element]||0)+1;
    }

    for(let element of str2){
        if(!map[element]) return false;
        map[element]=-1;
    }
    return true;
}
console.log(isAnagram("avi","aaa"))

function anagram(str1,str2){
    if(str1.length !==str2.length) return false;
    map={};
    for(let i=0; i<str1.length; i++){
        map[i]=(map[i] || 0)+1
    }

    for(let i=0; i<str2.length; i++){
        if(!map[i]) return false;
        map[i]=-1;
    }
    return true;
}
console.log(anagram("avi","AVS"))

function coutChar(str){
    let map={};
    for(let elem of str){
        map[elem]=(map[elem]||0)+1
    }
    return map;
}
console.log(coutChar("avinash"))  