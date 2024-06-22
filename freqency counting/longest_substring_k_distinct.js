// Longest substring with k distinct character

function windowIsValid(count,k){
    let unique=0;
    for(let i=0; i<count.length; i++){
        if(count[i]>0){
            unique++
        }
    }
    return unique;
}
function findKthLongestSubstring(str,k){
    let uniqueChar=0;
    let count=[];
    for(let i=0; i<26; i++){
        count.push(0)
    }

    for(let i=0; i<str.length; i++){
        if(count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]===0){
            uniqueChar++
        }
        count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++;
    }

    if(k>uniqueChar){
        console.log("String can not be formed");
        return
    }

    for(let i=0; i<26; i++){
        count[i]=0
    }

    let start=0, end=0;
    let maxSize=1, maxStart=0;
    
}