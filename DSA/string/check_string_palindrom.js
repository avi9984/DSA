// Check string is palindrom or not?

// method 1
function palindrom(str){
    let sp=str.split("")
    let rev=sp.reverse()
    let jo= rev.join("")
    if(str ===jo){
        return true
    }
    return false
}
// console.log(palindrom("avin"))
// console.log(palindrom("level"))

// method2
function isPalindrom(str){
    let s=0, e=str.length-1;
    while(s<e){
        if(str[s] !==str[e]) return false
        s++;
        e--;
    }
    return true
}
console.log(isPalindrom("nana"))
console.log(isPalindrom("madam"))