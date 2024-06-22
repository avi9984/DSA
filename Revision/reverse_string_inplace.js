// Reverse string in own place of string.
// "Hi to all"=>"iH ot lla"

function reverse(str){
    if(str.length==0) return "";
    return reverse(str.slice(1))+str[0]
}
console.log(reverse("hii"))

function reverseSentance(str){
    let word=str.split(" ")// convert into a arr
    console.log(word)
    for(let i=0; i<word.length; i++){
        word[i]=reverse(word[i])
    }
    return word.join(" ")
}
console.log(reverseSentance("hii to all"))