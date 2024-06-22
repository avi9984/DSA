//find the largest substring of the length

function largestStr(str){
    if(!str) return 0;
    let start=0, end=0, maxLength=0;
    let uniqueChar=new Set();
    while(end<str.length){
        if(!uniqueChar.has(str[end])){
            uniqueChar.add(str[end])
            end++;
            maxLength=Math.max(maxLength, uniqueChar.size)
        }else{
            uniqueChar.delete(str[start])
            start++
        }

    }
    return maxLength;
}
console.log(largestStr("abacbad"))