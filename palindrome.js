// write a function to check the palindrom of number

function isPalindrom(str) {
    let s = 0, e = str.length - 1;
    while (s < e) {
        if (str[s] == str[e]) {
            s++;
            e--;
            return true;
        }
        return false
    }
    return str
}
console.log(isPalindrom("1212"))