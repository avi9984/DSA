// Reverse sentence string

function reverse(str){
    if(str.length==0) return ""
    return reverse(str.slice(1))+str[0]
}
console.log(reverse("avi"))

function reverseWord(str){
    let word=str.split(' ')
    for(let i=0; i<word.length; i++){
        word[i]=reverse(word[i])
    }
    return word.join(' ')
}
console.log(reverseWord("avinash kumar"))