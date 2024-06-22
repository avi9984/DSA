function isPalindrome(str){
    let start=0, end=str.length-1;
    while(start<end){
        if(str[start]==str[end]){
            start++;
            end--;
            return true
        }
        return false
    }
    return str
}
console.log(isPalindrome("121"))
console.log(isPalindrome("papa"))
console.log(isPalindrome("racecar"))