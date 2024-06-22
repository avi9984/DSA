// JavaScript Program to Check Whether a String is Palindrome or Not

// method1
function Palindrome(str){
    let len=str.length;
    for(let i=0; i<len/2; i++){
        if(str[i] !==str[len-1-i]){
            return false
        }
    }
    return true
}
// console.log(Palindrome("123"))
// console.log(Palindrome("121"))
// console.log(Palindrome("papa"))
// console.log(Palindrome("racecar"))

// method 2

function isPalindrom(str){
    let s=0, e=str.length-1;
    while(s<e){
        if(str[s] !==str[e]) return false
        s++;
        e--;
    }
    return true;
}
console.log(isPalindrom("level"))
console.log(isPalindrom("dad"))
console.log(isPalindrom("121"))
console.log(isPalindrom("123"))