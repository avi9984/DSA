// program to sort words in alphabetical order

function wordSort(str){
    let words=str.split(" ")
    words.sort()
    for(let ele of words){
        console.log(ele)
    }
    return words
}
console.log(wordSort("i am a good backend developer"))

