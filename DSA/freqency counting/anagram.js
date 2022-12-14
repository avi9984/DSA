// Check given string is anangram or not 

// condition to solve; 



function isAnagram(str1,str2){
    
    if(str1.length !==str2.length) return false;

    let count={};
    for(let i=0; i<str1.length; i++){
        count[i]=(count[i] || 0)+1;
    }

    for(let i=0; i<str2.length; i++){
        if(!count[i]) return false;
        count[i] -=1;
    }
    return true;
}
console.log(isAnagram("avi","naa"))