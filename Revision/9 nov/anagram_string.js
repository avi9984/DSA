function isAnagram(str1,str2){
    if(str1.length !==str2.length) return false;
    let map={};
    for(let element of str1){
        map[element]=(map[element] ||0)+1
    }

    for(let element of str2){
        if(!map[element]) return false;
        map[element]=-1;
    }
    return true;
}
console.log(isAnagram("abc","bcaa"))