// find the length of longest substring with unique character

function lengthOfLongestSubstring(str){
    if(!str) return 0;
    let start=0,end=0,maxLength=0;
    const uniqueChar=new Set();

     while(end<str.length){
        if(!uniqueChar.has(str[end])){
            uniqueChar.add(str[end])
            end++;
            maxLength=Math.max(maxLength,uniqueChar.size);
        }else{
            uniqueChar.delete(str[start])
            start++
        }
     }
     return maxLength;
}

const longest=lengthOfLongestSubstring("abcabcbb");
console.log(longest)  